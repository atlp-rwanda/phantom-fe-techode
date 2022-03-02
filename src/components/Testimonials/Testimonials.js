import React from "react";
import CardTestimonial from "../Cards/CardTestimonial";

const Testimonials = () => {
  return (
    <div className="flex flex-col flex-wrap py-10 justify-center items-center">
      <div className="">
        <h1 className="text-2xl md:text-4xl font-bold text-primary-600 font-sans ">
          Testimonials
        </h1>
      </div>

      <div className="flex flex-row flex-wrap justify-between items-center mx-auto md:mx-20 md:p-10 pt-10">

        <CardTestimonial
          image="https://cdn.pixabay.com/photo/2018/02/16/14/38/portrait-3157821__340.jpg"
          name="Alex"
          testimonialContent="publishing packages and web page editors now use Lorem Ipsum as
            their. default model text, and a search for infancy. Various
            versions have evolved over the years, sometimes by accident,
            sometimes"
        />

        <CardTestimonial
          image="https://cdn.pixabay.com/photo/2018/08/23/22/29/girl-3626901__340.jpg"
          name="Alice"
          testimonialContent="publishing packages and web page editors now use Lorem Ipsum as
            their. default model text, and a search for infancy. Various
            versions have evolved over the years, sometimes by accident,
            sometimes"
        />

        <CardTestimonial
          image="https://cdn.pixabay.com/photo/2016/11/21/14/53/man-1845814__340.jpg"
          name="Thomas"
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
