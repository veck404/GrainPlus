import React from "react";
import { featuresData } from "../../../data/featuresData";

const FeaturesSlider = () => {
  return (
    <>
      <section className="features_slider relative h-[55vh]">
        {/* Container for the marquee effect, positioned at the bottom */}
        <div className="absolute bottom-0 left-0 right-0">
          {/* Marquee element for scrolling text */}
          {/* eslint-disable-next-line */}
          <marquee
            className="text-white mb-3" // Tailwind classes for text color and margin
            behavior="scroll"
            direction="left"
          >
            <div className="flex gap-[3rem]">
              {featuresData.map((features, index) => {
                const { fistFeature, secondFeature } = features;
                return (
                  <div key={index}>
                    <h1 className="text-7xl leading-[72px] xl:text-8xl tracking-[1px] percentage_value font-bedasNeue font-bold xl:leading-[110px] text-white flex gap-4">
                      {fistFeature} {secondFeature}
                    </h1>
                  </div>
                );
              })}
            </div>
          </marquee>
        </div>
      </section>
    </>
  );
};

export default FeaturesSlider;
