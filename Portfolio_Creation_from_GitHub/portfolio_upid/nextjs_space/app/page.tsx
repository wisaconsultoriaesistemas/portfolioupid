
import { HeroSection } from '@/components/hero-section';
import { AboutSection } from '@/components/about-section';
import { CasesSection } from '@/components/cases-section';
import { ContactSection } from '@/components/contact-section';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <CasesSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
