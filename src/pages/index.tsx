import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactSection from '../components/ContactSection';
import Skills from '../components/Skills';
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100">
      <HeroSection />
      <AboutSection />
      <Skills />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}