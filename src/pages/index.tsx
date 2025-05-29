import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import Projects from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';
import Skills from '../components/Skills';
import Platform from '@/components/PlatformSection';
export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <Skills />
      <Projects />
      <Platform />
      <ContactSection />
    </div>
  );
}