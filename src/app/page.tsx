import { Metadata } from "next";
import IntroductionSection from "@/components/sections/IntroductionSection";
import AboutSection from "@/components/sections/AboutSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ExperiencesSection from "@/components/sections/ExperiencesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import GetInTouchSection from "@/components/sections/GetInTouchSection";

export const metadata: Metadata = {
  title: "Lucas Garcia Bertaina | Backend Developer",
};

export default function Home() {
  return (
    <main>
      <IntroductionSection />
      <AboutSection />
      <SkillsSection />
      <ExperiencesSection />
      <TestimonialsSection />
      <GetInTouchSection />
    </main>
  );
}
