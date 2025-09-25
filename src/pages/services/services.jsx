import React from "react";
import "./assets/scss/style.scss";
import Banner from "./components/banner";
// import LogisticsCapabilities from "../../components/logisticsCapabilities";
import ContactRef from "../../components/contactRef";
import ServiceSecOne from "./components/serviceSecOne";

const Services = () => {
  return (
    <>
      <Banner />
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 lg:px-16 mt-12">
        <h1
          data-aos={`fade-right`}
          data-aos-duration="2000"
          className="text-green-900 font-outfit font-bold text-3xl md:text-5xl lg:text-6xl leading-tight"
        >
          Our Services
        </h1>
        <p className="mt-4 text-gray-600 max-w-2xl">
          We provide end-to-end logistics solutions — from customs clearance and
          freight forwarding to warehousing and distribution. Our services are
          tailored to move your cargo efficiently and reliably.
        </p>
      </div>
      {/* <LogisticsCapabilities showLink={false} /> */}
      <ServiceSecOne />
      {/* <ContactRef /> */}
    </>
  );
};

export default Services;
