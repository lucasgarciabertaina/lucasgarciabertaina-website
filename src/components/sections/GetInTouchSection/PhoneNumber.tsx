import Contact from "@/components/ui/Contact";
import { Phone } from "lucide-react";

const PhoneNumber = () => (
  <Contact contact="+64 272098994" className="mb-12">
    <Phone color="#4b5563" size={24} />
  </Contact>
);

export default PhoneNumber;
