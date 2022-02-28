import React from "react";
import CardService from "../Cards/CardService";

const Services = () => {
  return (
    <div className="flex flex-col flex-wrap py-10 justify-center items-center">
      <div className="">
        <h1 className="text-4xl font-bold text-blue-500 font-sans ">
          Services
        </h1>
      </div>

      <div className="flex flex-row flex-wrap justify-center items-center mx-auto md:mx-20 md:p-10 pt-10">
        <CardService
          serviceTitle="Bus tracking"
          serviceContent="Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's"
        />

        <CardService
          serviceTitle="Routes"
          serviceContent="Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's"
        />

        <CardService
          serviceTitle="Public bus stop track"
          serviceContent="Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's"
        />
      </div>
    </div>
  );
};

export default Services;
