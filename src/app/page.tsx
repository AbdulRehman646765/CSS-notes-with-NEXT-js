import ProgressBar from '../components/ProgressBar';
import Header from '../components/Header';
import SidebarTOC from '../components/SidebarTOC';
import ProgressDashboard from '../components/ProgressDashboard';
import TopicList from '../components/TopicList';
// import QuizSection from '../components/QuizSection';
import Footer from '../components/Footer';
import BackToTop from '../components/BackToTop';
import FloatingMenuBtn from '../components/FloatingMenuBtn';

export default function Home() {
  return (
    <>
      <ProgressBar />
      <SidebarTOC />
      <Header />
      <ProgressDashboard />
      <TopicList />
      {/* <QuizSection /> */}
      <Footer />
      <BackToTop />
      <FloatingMenuBtn />
    </>
  );
}
