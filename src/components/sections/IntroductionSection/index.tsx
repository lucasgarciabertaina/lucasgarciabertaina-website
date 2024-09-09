import Container from "@/components/ui/Container";
import Hero from "@/components/sections/IntroductionSection/Hero";
import MyPicture from "@/components/sections/IntroductionSection/MyPicture";

const IntroductionSection = () => (
  <Container className="flex flex-col md:gap-x-12 md:flex-row pt-36">
    <MyPicture className="order-1 md:order-2 w-full md:w-1/3 pb-12 md:pb-0" />
    <Hero className="order-2 md:order-1 w-full md:w-2/3" />
  </Container>
);

export default IntroductionSection;
