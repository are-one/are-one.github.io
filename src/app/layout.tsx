import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@/lib/theme-context';

export const metadata: Metadata = {
  title: 'Portfolio | Software Engineer',
  description: 'Modern portfolio showcasing software engineering skills and projects',
  keywords: ['portfolio', 'software engineer', 'web development', 'React', 'Next.js'],
  authors: [{ name: 'Your Name' }],
  openGraph: {
    title: 'Portfolio | Software Engineer',
    description: 'Modern portfolio showcasing software engineering skills and projects',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Portfolio | Software Engineer',
    description: 'Modern portfolio showcasing software engineering skills and projects',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
