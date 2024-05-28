import Features from '@/components/Features';
import Hero from '@/components/Hero';
import Products from '@/components/Products';
import Location from '@/components/Location';
import Contact  from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Hero />
      <Features />
      <Products />
      <Contact/>
    </main>
  );
}
