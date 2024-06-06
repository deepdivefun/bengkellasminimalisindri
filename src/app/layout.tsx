import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import GoogleAnalytics from '@/components/GoogleAnalytics';


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default:"Bengkel Las Bekasi",
    template:"%s - Bengkel Las Terpercaya Dan Berpengalaman",
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
      <head>
      <GoogleAnalytics/>
      </head>
      <body className={`${inter.className} static`} >
        <Navbar />
        {children}
        <Footer  />
      </body>
    </html>
  );
}
