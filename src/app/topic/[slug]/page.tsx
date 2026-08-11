import Link from 'next/link';
import { notFound } from 'next/navigation';
import { topicsData } from '../../../data/topics';
import Header from '../../../components/Header';
import SidebarTOC from '../../../components/SidebarTOC';
import TopicCard from '../../../components/TopicCard';
import Footer from '../../../components/Footer';
import BackToTop from '../../../components/BackToTop';
import ProgressBar from '../../../components/ProgressBar';

interface TopicPageProps {
  params: {
    slug: string;
  };
}

// Pre-generate static routes for all 58 topics at build time!
export async function generateStaticParams() {
  return topicsData.map(topic => ({
    slug: topic.id,
  }));
}

export async function generateMetadata({ params }: TopicPageProps) {
  const topic = topicsData.find(t => t.id === params.slug);
  if (!topic) return { title: 'Topic Not Found – CSS Notes' };

  return {
    title: `${topic.tag} ${topic.title} – CSS Notes`,
    description: topic.definition,
  };
}

export default function SingleTopicPage({ params }: TopicPageProps) {
  const topic = topicsData.find(t => t.id === params.slug);
  if (!topic) return notFound();

  return (
    <>
      <ProgressBar />
      <SidebarTOC />
      <Header />

      {/* Top Banner Navigation */}
      <div className="single-topic-nav-banner">
        <Link href="/" className="back-to-all-link">
          <i className="fa-solid fa-arrow-left" /> Back to All Topics Overview
        </Link>
        <span className="single-topic-badge">
          Dynamic Route: <code>/topic/{topic.id}</code>
        </span>
      </div>

      {/* Topic Card Render */}
      <TopicCard topic={topic} />

      <Footer />
      <BackToTop />
    </>
  );
}
