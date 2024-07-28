import { Metadata } from "next";
import Header from "@/components/header";
import Introduction from "@/components/introduction";
import About from "@/components/about";

export const metadata: Metadata = {
  title: "Lucas Garcia Bertaina | Backend Developer",
};

export default function Home() {
  return (
    <main>
      <Header />
      <Introduction />
      <About />
    </main>
  );
}
