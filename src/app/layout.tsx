import type { Metadata } from 'next';
import './globals.css';
import { NotesProvider } from '../context/NotesContext';

export const metadata: Metadata = {
  title: 'CSS Notes – Learn CSS in Roman Urdu, Hindi, English & Arabic',
  description:
    'Interactive CSS learning platform with 58 topics, bilingual explanations (Roman Urdu, Hindi, English, Arabic), practice exercises, pro tips, and learning progress tracking.',
  keywords: ['CSS', 'CSS Notes', 'Learn CSS', 'CSS Tutorial', 'CSS Urdu', 'CSS Hindi', 'CSS Arabic'],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.6.0/css/all.min.css"
        />
        <link rel="shortcut icon" href="/css-3.svg" type="image/x-icon" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body id="top">
        <NotesProvider>{children}</NotesProvider>
      </body>
    </html>
  );
}
