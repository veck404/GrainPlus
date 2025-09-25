import React from "react";
import Projects from "../../../components/projects";
// import ExternalLink from "../../../components/externalLink";

const Triumphs = () => {
  return (
    <>
      <section className="pt-[1rem] pb-[5rem] overflow-hidden bg-gray-100">
        <div className="px-[20px] lg:px-[100px] w-full">
          <h2
            data-aos="fade-right"
            data-aos-duration="2000"
            className="text-green-600 mt-[50px] font-[700] text-[30px] leading-[40px] font-outfit md:text-[66px] md:leading-[66px] xl:text-[90px] xl:leading-[90px]"
          >
            Our Prestigious Clients
          </h2>
          <hr className="mt-9" />
          {/* <div className="mt-2">
            <ExternalLink
              linkPath={"/projects"}
              linkText={"Latest Services"}
              addedClass={"ml-auto"}
            />
          </div> */}
          <h3
            data-aos="fade-in"
            data-aos-duration="2000"
            className="mt-8 text-[18px] font-jost leading-[18px] lg:text-[32px] lg:leading-[32px] text-green-700 font-[400]"
          >
            Beyond Boundaries: Our Business
          </h3>
          <div className="mt-9"></div>
          <Projects />
        </div>
      </section>
    </>
  );
};

export default Triumphs;
