import React from "react";
import Testimonials from "../Testimonials/Testimonials";

const CardTestimonial = ({image, name, testimonialContent}) => {
  return (
    <div className="ph-card-testimonial relative w-60 md:w-60 md:mx-2.5 px-2.5 mb-5 mt-5 md:mt-10 p-4 max-w-sm mx-auto items-center justify-center bg-white rounded-lg border shadow-md sm:p-8 ">
      <div className="absolute w-10 h-10 md:w-20 md:h-20 -top-6 md:-top-12 rounded-full bg-white items-center mx-auto content-center justify-center">
        <img src={image} className="rounded-full w-full h-full" />
      </div>
      <h1 className="text-xl md:text-2xl font-bold text-primary-600 font-sans p-1 md:p-2.5">{name}</h1>

      <p className="content p-1 md:p-0.5">
       {testimonialContent}
      </p>
    </div>
  );
};

export default CardTestimonial;
