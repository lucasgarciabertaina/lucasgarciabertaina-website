import Title from "@/components/ui/Title";
import Container from "@/components/ui/Container";
import AboutMePicture from "@/components/sections/AboutSection/AboutMePicture";
import AboutDescription from "@/components/sections/AboutSection/AboutDescription";

const AboutSection = () => (
  <Container className="bg-gray-50 flex-col md:flex-row">
    <Title id="about">About me</Title>
    <div className="flex flex-col md:flex-row md:gap-x-12 py-12 justify-between">
      <AboutMePicture />
      <AboutDescription />
    </div>
  </Container>
);

export default AboutSection;
