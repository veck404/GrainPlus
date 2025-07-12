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
            autoplay={{ delay: 2000 }}
            navigation={{
              nextEl: ".next_btn",
              prevEl: ".prev_btn",
              clickable: true,
            }}
            effect="coverflow"
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
            }}
            className="flex justify-center"
          >
            {/* Map through imageSliderData to render each slide */}
            {imageSliderData.map((sliderData, index) => {
              const { imageUrl, description } = sliderData;
              return (
                <SwiperSlide
                  key={index}
                  className="m-[40px] shadow-2xl
                "
                >
                  {/* Image container for each slide */}
                  <div className="h-[400px] flex items-center">
                    <img src={imageUrl} width={"100%"} alt={description} />
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
