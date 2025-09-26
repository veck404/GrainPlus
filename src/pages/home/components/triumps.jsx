import React from "react";
import Projects from "../../../components/projects";
// import ExternalLink from "../../../components/externalLink";

const Triumphs = () => {
  return (
    <>
      <section className="pt-[1rem] pb-[5rem] overflow-hidden bg-gray-100">
        <div className="px-[20px] lg:px-[100px] w-full">
          <h4
            data-aos="fade-right"
            data-aos-duration="2000"
            className="text-green-800 mt-[50px] font-[500] text-[30px] leading-[40px] font-outfit md:text-[66px] md:leading-[66px] xl:text-[80px] xl:leading-[90px]"
          >
            Our Prestigious Clients
          </h4>
          {/* <hr className="mt-9" /> */}

          {/* <div className="mt-9"></div> */}
          <Projects />
        </div>
      </section>
    </>
  );
};

export default Triumphs;
