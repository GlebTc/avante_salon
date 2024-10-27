import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import Navbar from '@/src/components/navabr/Navbar';
import Footer from '@/src/components/footer/Footer';
import SocialMedia from '@/src/components/reusable/SocialMedia';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'Avanté Salon & Spa | Hamilton, Ontario',
  description: 'Avanté Salon & Spa | Hamilton, Ontario',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SocialMedia />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
