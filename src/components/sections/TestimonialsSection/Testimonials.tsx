import Testimonial from "@/components/sections/TestimonialsSection/Testimonial";

const Testimonials = () => (
  <div className="pt-12 grid grid-cols-3 grid-rows-1 gap-x-12">
    <Testimonial
      image="javascript.svg"
      testimonialFullName="John Doe"
      currentRole="Founder - xyz.com"
    >
      “Job well done! I am really impressed. He is very very good at what he
      does:) I would recommend Sagar and will rehire in the future for Frontend
      development.”
    </Testimonial>
    <Testimonial
      image="javascript.svg"
      testimonialFullName="John Doe"
      currentRole="Founder - abc.com"
    >
      “Great guy, highly recommended for any COMPLEX front-end development job!
      His skills are top-notch and he will be an amazing addition to any team.”
    </Testimonial>
    <Testimonial
      image="javascript.svg"
      testimonialFullName="John Doe"
      currentRole="Freelancer"
    >
      “Sagar was extremely easy and pleasant to work with and he truly cares
      about the project being a success. Sagar has a high level of knowledge and
      was able to work on my MERN stack application without any issues.”
    </Testimonial>
  </div>
);

export default Testimonials;
