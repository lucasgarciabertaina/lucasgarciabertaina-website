import Title from "@/components/ui/Title";
import Container from "@/components/ui/Container";
import SubTitle from "@/components/ui/SubTitle";
import Email from "@/components/sections/GetInTouchSection/Email";
import PhoneNumber from "@/components/sections/GetInTouchSection/PhoneNumber";
import Platforms from "@/components/sections/GetInTouchSection/Platforms";

const GetInTouchSection = () => (
  <Container className="flex flex-col items-center">
    <Title>Get in touch</Title>
    <SubTitle className="max-w-xl">
      What’s next? Feel free to reach out to me if you are looking for a
      developer, have a query, or simply want to connect.
    </SubTitle>
    <Email />
    <PhoneNumber />
    <Platforms />
  </Container>
);

export default GetInTouchSection;
