import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { projectsImageData } from "../data/projectsImage";

const Projects = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="mt-[50px]">
      <Slider {...settings}>
        {projectsImageData.map((projectData, index) => {
          const { imageURL, imageDescription } = projectData;
          return (
            <div key={index} className="p-2">
              <div
                data-aos="fade-up"
                data-aos-duration="2000"
                className="relative project_image_wrap w-full rounded-lg overflow-hidden border-2 border-green-600 shadow-lg sm:shadow-md transform transition-transform duration-300 hover:scale-105 active:scale-95 active:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-200"
                tabIndex={0}
              >
                <img
                  src={imageURL}
                  className="w-full h-36 md:h-36 lg:h-52 object-cover duration-700"
                  alt={imageDescription}
                />
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Projects;
