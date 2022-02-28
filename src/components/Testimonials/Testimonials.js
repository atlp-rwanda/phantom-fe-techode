import React from "react";
import CardTestimonial from "../Cards/CardTestimonial";

const Testimonials = () => {
  return (
    <div className="flex flex-col flex-wrap py-10 justify-center items-center">
      <div className="">
        <h1 className="text-2xl md:text-4xl font-bold text-blue-500 font-sans ">
          Testimonials
        </h1>
      </div>

      <div className="flex flex-row flex-wrap justify-center items-center mx-auto md:mx-20 md:p-10 pt-10">

        <CardTestimonial
          name="Alex"
          testimonialContent="publishing packages and web page editors now use Lorem Ipsum as
            their. default model text, and a search for infancy. Various
            versions have evolved over the years, sometimes by accident,
            sometimes"
        />

        <CardTestimonial
          name="Thomas"
          testimonialContent="publishing packages and web page editors now use Lorem Ipsum as
            their. default model text, and a search for infancy. Various
            versions have evolved over the years, sometimes by accident,
            sometimes"
        />

        <CardTestimonial
          name="Alice"
          testimonialContent="publishing packages and web page editors now use Lorem Ipsum as
            their. default model text, and a search for infancy. Various
            versions have evolved over the years, sometimes by accident,
            sometimes"
        />
      </div>
    </div>
  );
};

export default Testimonials;
