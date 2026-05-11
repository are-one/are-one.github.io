import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import SkillsSection from '@/components/sections/SkillsSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/layout/Footer';
import Navbar from '@/components/layout/Navbar';
import ParticleBackground from '@/animations/ParticleBackground';
import FloatingElements from '@/animations/FloatingElements';

export default function Home() {
  return (
    <main>
      <ParticleBackground />
      <FloatingElements />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Navbar />
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}
