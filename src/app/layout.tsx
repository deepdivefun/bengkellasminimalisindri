import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GoogleAnalytics from '@/components/GoogleAnalytics';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default:"Bengkel Las",
    template:"%s - Bengkel Las Dan Bengkel Las Minimalis",
  },
  description: 'Bengkel Las Bekasi Melayani pembuatan dan servis pagar, kanopi, pintu minimalis, jendela minimalis, railing dor',
  twitter : {
    card :"summary_large_image"
  }
  
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <GoogleAnalytics/>
        <Navbar />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
