import AmbientBackground from '@/components/AmbientBackground';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import VerticalsSection from '@/components/VerticalsSection';
import StandardsSection from '@/components/StandardsSection';
import WorkflowSection from '@/components/WorkflowSection';
import FAQSection from '@/components/FAQSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-clip">
      <AmbientBackground />
      <Header />
      <HeroSection />
      <VerticalsSection />
      <StandardsSection />
      <WorkflowSection />
      <FAQSection />
      <ContactSection />
      <Footer />
      <BackToTop />
    </main>
  );
}
