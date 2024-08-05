import Contact from "./contact";
import { Mail } from "lucide-react";

const Email = () => (
  <Contact contact="lucasgarciabertaina@gmail.com" className="mt-12 mb-4">
    <Mail color="#4b5563" size={24} />
  </Contact>
);

export default Email;
