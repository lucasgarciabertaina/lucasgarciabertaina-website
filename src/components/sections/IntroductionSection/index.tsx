import Container from "@/components/ui/Container";
import Hero from "@/components/sections/IntroductionSection/Hero";
import MyPicture from "@/components/sections/IntroductionSection/MyPicture";

const IntroductionSection = () => (
  <Container className="flex gap-x-12">
    <Hero />
    <MyPicture className="w-1/3" />
  </Container>
);

export default IntroductionSection;
