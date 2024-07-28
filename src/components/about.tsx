import Title from "./Title";
import Container from "./container";
import AboutMePicture from "./aboutMePicture";
import AboutDescription from "./aboutDescription";

const About = () => (
  <Container className="bg-gray-50">
    <Title>About me</Title>
    <div className="flex gap-x-12 py-12 justify-between">
      <AboutMePicture />
      <AboutDescription />
    </div>
  </Container>
);

export default About;
