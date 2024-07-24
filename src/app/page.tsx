import { Metadata } from "next";
import Header from "@/components/header";

export const metadata: Metadata = {
  title: "Lucas Garcia Bertaina | Backend Developer",
};

export default function Home() {
  return (
    <main>
      <Header />
    </main>
  );
}
