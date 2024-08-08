import Title from "@/components/ui/Title";
import Container from "@/components/ui/Container";
import SubTitle from "@/components/ui/SubTitle";
import Testimonials from "@/components/sections/TestimonialsSection/Testimonials";

const TestimonialsSection = () => (
  <Container className="bg-gray-50">
    <Title>Testimonials</Title>
    <SubTitle>Nice things people have said about me:</SubTitle>
    <Testimonials />
  </Container>
);

export default TestimonialsSection;
