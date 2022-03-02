import React from "react";
import CardService from "../Cards/CardService";
import map from '../../assets/svgs/map.svg'
import route from '../../assets/svgs/route.svg'
import stop from '../../assets/svgs/stop.svg'

const Services = () => {
  return (
    <div id="services" className="flex flex-col flex-wrap py-10 justify-center items-center">
      <div className="">
        <h1 className="text-2xl md:text-4xl font-bold text-primary-600 font-sans ">
          Services
        </h1>
      </div>

      <div className="flex flex-row flex-wrap justify-between items-center mx-auto md:mx-20 md:p-10 pt-10">
        <CardService
          image={map}
          serviceTitle="Tracking"
          serviceContent="Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's"
        />

        <CardService
          image={route}
          serviceTitle="Routes"
          serviceContent="Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's"
        />

        <CardService
          image={stop}
          serviceTitle="Bus stop"
          serviceContent="Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's"
        />
      </div>
    </div>
  );
};

export default Services;
