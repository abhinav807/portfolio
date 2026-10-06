import HeroSection from "@/components/section/hero-section";
import HighlightsSection from "@/components/section/highlights-section";
import AboutSection from "@/components/section/about-section";
import ExperienceSection from "@/components/section/experience-section";
import WebsitesSection from "@/components/section/websites-section";
import ProjectsSection from "@/components/section/projects-section";
import GithubSection from "@/components/section/github-section";
import GoldenHourSection from "@/components/section/goldenhour-section";
import EventsSection from "@/components/section/events-section";
import SkillsSection from "@/components/section/skills-section";
import ContactSection from "@/components/section/contact-section";

export default function Page() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <HighlightsSection />
      <AboutSection />
      <ExperienceSection />
      <WebsitesSection />
      <ProjectsSection />
      <GithubSection />
      <GoldenHourSection />
      <EventsSection />
      <SkillsSection />
      <ContactSection />
    </div>
  );
}
