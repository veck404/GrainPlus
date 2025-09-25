import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { imageSliderData } from "../../../data/carouselSliderImage";
import { Navigation, Autoplay } from "swiper/modules";
import * as AiIcons from "react-icons/ai";
import "swiper/css/autoplay";

const CarouselSlider = () => {
  return (
    <>
      <section className="py-[5rem] overflow-hidden bg-gray-200">
        {/* Container for the slider */}
        <div className="px-[20px] lg:px-[0px] w-full">
          <Swiper
            data-aos="fade-left"
            data-aos-duration="2000"
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={"auto"}
            modules={[Navigation, Autoplay]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            speed={700}
            navigation={{
              nextEl: ".next_btn",
              prevEl: ".prev_btn",
              clickable: true,
            }}
            effect="coverflow"
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 80,
              modifier: 1.6,
            }}
            className="flex justify-center"
          >
            {/* Map through imageSliderData to render each slide */}
            {imageSliderData.map((sliderData, index) => {
              const { imageUrl, description } = sliderData;
              return (
                <SwiperSlide key={index} className="m-4">
                  {/* Card-wrapped image for each slide */}
                  <div className="rounded-lg overflow-hidden shadow-sm sm:shadow-md transform transition-transform duration-500 ease-in-out hover:scale-[1.02] hover:-translate-y-1 active:shadow-lg">
                    <img
                      src={imageUrl}
                      alt={description}
                      className="w-full h-40 md:h-48 lg:h-56 object-cover"
                    />
                  </div>
                </SwiperSlide>
              );
            })}
            {/* Navigation buttons */}
            <div className="flex items-center justify-center gap-4">
              {/* Previous button */}
              <button className="h-[50px] prev_btn w-[50px] text-green-500 rounded-[50%] border border-green-500 flex items-center justify-center">
                <AiIcons.AiOutlineArrowLeft />
              </button>
              {/* Next button */}
              <button className="h-[50px] w-[50px] next_btn text-green-500 rounded-[50%] border border-green-500 flex items-center justify-center">
                <AiIcons.AiOutlineArrowRight />
              </button>
            </div>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default CarouselSlider;
