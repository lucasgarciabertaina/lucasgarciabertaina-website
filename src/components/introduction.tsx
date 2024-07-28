import Hero from "./hero";
import MyPicture from "./myPicture";
import Container from "./container";

const Introduction = () => (
  <Container className="flex gap-x-12">
    <Hero />
    <MyPicture className="w-1/3" />
  </Container>
);

export default Introduction;
