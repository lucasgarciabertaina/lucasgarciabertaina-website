import { Metadata } from "next";
import Header from "@/components/header";
import Introduction from "@/components/introduction";

export const metadata: Metadata = {
  title: "Lucas Garcia Bertaina | Backend Developer",
};

export default function Home() {
  return (
    <main>
      <Header />
      <Introduction />
    </main>
  );
}
