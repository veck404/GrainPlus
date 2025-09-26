import React from "react";
import { statsBarData } from "../data/statsBar";
import CargoImage from "../assets/images/cargo_ship.jpg";
// This component displays information about the company, including a description and statistics.

const ChooseUs = ({ floatDiraction }) => {
  return (
    <>
      <section className="py-[5rem] bg-white overflow-hidden">
        <div className="px-[20px] lg:px-[100px] w-full">
          <h2
            data-aos={`fade-right`}
            data-aos-duration="2000"
            className="text-green-800 font-outfit mt-[50px] font-[600] text-[40px] leading-[40px] md:text-[50px] md:leading-[66px] xl:text-[50px] xl:leading-[90px]"
          >
            Why Us
          </h2>
          <hr className="mt-9" />
          <div className="mt-8">
            <div className="block xl:flex gap-[5rem]">
              <div className="content_wrap_one w-[100%] xl:w-[60%]">
                <h3
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  className="mt-5 text-[18px] font-jost leading-[18px] lg:text-[32px] lg:leading-[32px] text-green-800 font-[400]"
                >
                  We are Quick, Efficient, and Reliable.
                </h3>
                <div className="mt-[50px]">
                  <div
                    className="tab_contents"
                    data-aos="fade-up"
                    data-aos-duration="2000"
                  >
                    <p className="w-fit font-jost text-[16px] lg:text-[18px] text-gray-700 block leading-[31px] mt-3">
                      GrainPlus Logistics is a leading Nigerian logistics
                      company with over a decade of experience in the industry.
                      We specialize in providing efficient, customer-oriented
                      services, meticulously tailored to meet the precise needs
                      of each client. As your trusted logistics partner, we
                      offer a comprehensive suite of services including Freight
                      Forwarding, Customs Clearance, and Transportation, both
                      locally within Nigeria and internationally. When your
                      products need to reach their destination, you can rely on
                      GrainPlus Logistics to deliver with precision and add
                      significant value to your supply chain.
                    </p>
                    <div
                      className="mt-[50px]"
                      data-aos="fade-up"
                      // Iterates over statsBarData to display individual statistics.
                      data-aos-duration="2000"
                    >
                      {statsBarData.map((stats, index) => {
                        const { name, percentage } = stats;
                        return (
                          <div key={index} className="mt-5 font-jost">
                            <div className="flex">
                              <div className="mr-auto">
                                <div className="text-green-800">
                                  <p className="font-[500]">{name}</p>
                                </div>
                              </div>
                              <div className="text-green-800">
                                <p className="font-[500]">{percentage}%</p>
                              </div>
                            </div>
                            <div className="mt-2">
                              <div
                                className="w-full bg-gray-300 h-2 rounded overflow-hidden"
                                role="progressbar"
                                aria-valuemin="0"
                                aria-valuemax="100"
                                aria-valuenow={percentage}
                              >
                                <div
                                  className="bg-green-800 h-2 rounded"
                                  style={{ width: `${percentage}%` }}
                                />
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
              <div
                // Image section with AOS animation.
                data-aos="fade-left"
                data-aos-duration="2000"
                className="image_wrap mt-[100px] xl:w-[40%] xl:h-[100%] xl:mt-[100px] flex items-center justify-center"
              >
                <div className="relative img_el before:absolute before:-top-[5%] before:-left-[5%] before:h-[100px] before:w-[100px] after:absolute after:-bottom-[5%] after:-right-[5%] after:h-[100px] after:w-[100px]">
                  <div
                    className="rounded-lg overflow-hidden shadow-sm sm:shadow-md transform transition-transform duration-300 hover:scale-[1.02] hover:-translate-y-1 active:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-200"
                    tabIndex={0}
                  >
                    <img
                      src={CargoImage}
                      className="w-full h-56 md:h-96 md:w-96 object-cover"
                      alt="cargo ship"
                    />
                  </div>
                </div>
                {/* Decorative elements around the image */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

// Exports the ChooseUs component for use in other parts of the application.
export default ChooseUs;

// export const statsBarData = [
//   { name: "Customer Satisfaction", percentage: 95 },
//   { name: "Delivery On Time", percentage: 85 },
//   { name: "Client Retention", percentage: 75 }
// ];
