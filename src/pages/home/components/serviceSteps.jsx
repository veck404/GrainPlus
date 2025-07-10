import React from "react";
import { serviceData } from "../../../data/serviceStepsData";

const ServiceSteps = () => {
  return (
    <>
      <section className="service_steps py-[5rem] flex items-center">
        {/* Container for the service steps content */}
        <div className="px-[20px] lg:px-[100px] w-full text-white text-sm">
          {/* Grid layout for service items */}
          <div className="grid lg:grid-cols-3 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {/* Map through serviceData to render each service step */}
            {serviceData.map((data, index) => {
              const { icon, title, detail } = data;
              return (
                // Individual service step item
                <div data-aos="fade-in" data-aos-duration="2000" key={index}>
                  {/* Icon wrapper */}
                  <div className="ico_wrap flex items-center justify-center">
                    {/* Icon box with styling */}
                    <div className="ico_box h-[100px] text-[50px] w-[100px] bg-black rounded-[50%] flex items-center justify-center">
                      {icon}
                    </div>
                  </div>
                  {/* Service title */}
                  <h1 className="text-[22px] font-outfit tracking-wider leading-[22px] mt-5 font-[600] text-white">
                    {title}
                  </h1>
                  {/* Service detail/description */}
                  <p className="mt-5 font-jost text-gray-400">{detail}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default ServiceSteps;
