import Title from "./Title";
import Container from "./container";
import SubTitle from "./subTitle";
import Testimonials from "./Testimonials";

const TestimonialsSection = () => (
  <Container className="bg-gray-50">
    <Title>Testimonials</Title>
    <SubTitle>Nice things people have said about me:</SubTitle>
    <Testimonials />
  </Container>
);

export default TestimonialsSection;
