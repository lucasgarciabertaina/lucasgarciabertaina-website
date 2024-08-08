import Title from "@/components/ui/Title";
import Container from "@/components/ui/Container";
import SubTitle from "@/components/ui/SubTitle";
import Tracestory from "@/components/sections/ExperiencesSection/Tracestory";

const ExperiencesSection = () => (
  <Container className="bg-gray-50">
    <Title>Experience</Title>
    <SubTitle>Here is a quick summary of my experience:</SubTitle>
    <Tracestory />
  </Container>
);

export default ExperiencesSection;
