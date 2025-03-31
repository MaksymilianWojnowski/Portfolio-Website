import HomeSection from "./components/HomeSection";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactSection from "./components/ContactSection";
import SkillsSection from "./components/SkillsSection";

export default function Page() {
  return (
    <main className="pt-[80px] bg-light text-dark dark:bg-dark dark:text-light">
      {/* offset top so content isn't hidden under Navbar */}
      <HomeSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
