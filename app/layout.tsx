import './globals.css';
import { Montserrat } from 'next/font/google';
import type { Metadata } from 'next';

// Import Montserrat
const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-montserrat', 
});

export const metadata: Metadata = {
  title: 'Cartolinks',
  description: 'Pixel perfect UI clone of Cartolinks',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={montserrat.className}>
      <body>{children}</body>
    </html>
  );
}
