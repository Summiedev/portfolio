import { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import SkillsSection from "./components/SkillsSection";
import FeaturedSection from "./components/FeaturedSection";
import ReflectionSection from "./components/ReflectionSection";
import ContactSection from "./components/ContactSection";
import {
  navItems,
  profile,
  heroSocials,
  projects,
  skills,
  featured,
  reflection,
  contactCopy,
  contactLinks,
  footerText,
} from "./data/portfolioData";

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "dark");
  }, []);

  return (
    <>
      <NavBar
        navItems={navItems}
        mobileMenuOpen={mobileMenuOpen}
        onToggleMobileMenu={() => setMobileMenuOpen((open) => !open)}
        onCloseMobileMenu={() => setMobileMenuOpen(false)}
      />

      <HeroSection profile={profile} heroSocials={heroSocials} />
      <ProjectsSection projects={projects} />
      <SkillsSection skills={skills} />
      <FeaturedSection featured={featured} />
      <ReflectionSection reflection={reflection} />
      <ContactSection contactCopy={contactCopy} contactLinks={contactLinks} />

      <footer>
        <div className="wrap">
          <p>{footerText}</p>
        </div>
      </footer>
    </>
  );
}
