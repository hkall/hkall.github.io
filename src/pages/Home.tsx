import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import GuidingPrinciples from '@/components/GuidingPrinciples';
import CommitmentSection from '@/components/CommitmentSection';
import ServiceGuide from '@/components/ServiceGuide';
import Testimonials from '@/components/Testimonials';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import { useEffect } from 'react';

export default function Home() {
  // Handle scroll behavior for navigation
  useEffect(() => {
    const handleScroll = () => {
      window.scrollTo({
        behavior: 'smooth'
      });
    };

    // Add event listeners to navigation links
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', handleScroll);
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', handleScroll);
      });
    };
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HeroSection />
        <GuidingPrinciples />
        <CommitmentSection />
        <ServiceGuide />
        <Testimonials />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}