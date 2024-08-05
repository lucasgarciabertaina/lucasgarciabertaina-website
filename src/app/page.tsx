import { Metadata } from "next";
import Header from "@/components/header";
import Introduction from "@/components/introduction";
import About from "@/components/about";
import Skills from "@/components/skills";
import Experiences from "../components/experiences";
import TestimonialsSection from "@/components/TestimonialsSection";
import GetInTouchSection from "@/components/GetInTouchSection";
import Footer from "@/components/footer";

export const metadata: Metadata = {
  title: "Lucas Garcia Bertaina | Backend Developer",
};

export default function Home() {
  return (
    <main>
      <Header />
      <Introduction />
      <About />
      <Skills />
      <Experiences />
      <TestimonialsSection />
      <GetInTouchSection />
      <Footer />
    </main>
  );
}
