import Testimonial from "@/components/sections/TestimonialsSection/Testimonial";

const Testimonials = () => (
  <div className="pt-12 grid grid-cols-3 grid-rows-1 gap-x-12">
    <Testimonial
      image="federico.jpeg"
      testimonialFullName="Federico Herrera"
      currentRole="Project Manager - tracestory.com"
    >
      “During his time at Tracestory, Lucas demonstrated a great capacity for
      learning and adaptation, both to the different tasks requested and to the
      needs and challenges linked to the product. At all times he was committed
      to the team and to maintaining a high standard in his results.”
    </Testimonial>
    <Testimonial
      image="nicolas.jpeg"
      testimonialFullName="Nicolas Santa"
      currentRole="Chief Technology Officer, Co-Founder - tracestory.com"
    >
      “Lucas is an incredible young professional. He has demonstrated that he
      can overcome any obstacle by utilizing his heuristics. He is also a
      self-managed, pragmatic, intelligent, hardworking, and thoughtful software
      engineer. I highly recommend working with him and hope to work with him
      soon.”
    </Testimonial>

    <Testimonial
      image="richard.jpeg"
      testimonialFullName="Richard Reynolds"
      currentRole="Digital Product Designer & Web Developer"
    >
      "I had the opportunity to work with Lucas for a short time, but it was
      enough to recognize his strong skills as a developer and his
      problem-solving abilities. He is very easy to work with and proactive in
      finding solutions. It was a great experience, and I would highly recommend
      him."
    </Testimonial>
  </div>
);

export default Testimonials;
