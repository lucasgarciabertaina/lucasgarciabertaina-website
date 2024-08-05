import Title from "./Title";
import Container from "./container";
import SubTitle from "./subTitle";
import Email from "./email";
import PhoneNumber from "./phoneNumber";
import Platforms from "./platforms";

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
