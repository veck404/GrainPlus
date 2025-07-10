import React from "react";
import { Link } from "react-router-dom";
import { navbarLinks } from "../data/navbarLinksData";
import { supportLinks } from "../data/supportLinks";

const Footer = () => {
  const topLinkNavLinks = navbarLinks.slice(0, 5);
  const d = new Date();
  const currentYear = d.getFullYear();

  return (
    <>
      <footer className="w-full bg-white overflow-hidden py-[5rem] ">
        <div class="h-1 bg-gray-400 mb-10 rounded-full mx-4 md:mx-10"></div>
        <div className="md:flex gap-4 px-[20px] lg:px-[100px]">
          <div className="md:basis-1/2">
            <div>
              <Link to="/" className="text-gray-900">
                <h1
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  className="text-3xl tracking-widest font-jost leading-[24px] font-normal uppercase"
                >
                  GrainPlus Logistics <br /> <br />.
                </h1>
              </Link>

              <p
                data-aos="fade-up"
                data-aos-duration="2000"
                className="w-full mt-4 font-jost md:w-8/12 text-gray-500 lg:leading-8 lg:text-lg"
              >
                Address: Elita Building, Office No- 3 & 4 Sec- 06, Plot no-21,
                Kamothe, Navi Mumbai, 410209
              </p>
              <p
                data-aos="fade-up"
                data-aos-duration="2000"
                className="w-full mt-4 font-jost md:w-8/12 text-gray-500 lg:leading-8 lg:text-lg"
              >
                Email: GrainPluslogistics2017@gmail.com Phone no: 9702043415 ,
                <br></br> 8356920370
              </p>
            </div>
          </div>
          <div className="mt-5 md:mt-0 md:basis-1/3">
            <h1
              data-aos="fade-up"
              data-aos-duration="2000"
              className="text-3xl text-gray-900 tracking-widest font-jost leading-[24px] font-normal uppercase"
            >
              Quick Links.
            </h1>

            <div className="mt-4">
              {topLinkNavLinks.map((data, index) => {
                const { linkPath, name } = data;
                return (
                  <div
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    key={index}
                    className="w-full lg:leading-8 lg:text-lg"
                  >
                    <Link
                      to={linkPath}
                      className="no-underline text-gray-500 font-jost"
                    >
                      {name}
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="md:basis-1/3 mt-5 md:mt-0">
            <h1
              data-aos="fade-up"
              data-aos-duration="2000"
              className="text-3xl text-gray-900 tracking-widest font-jost leading-[24px] font-normal uppercase"
            >
              Support Links.
            </h1>

            <div className="mt-4">
              {supportLinks.map((data, index) => {
                const { linkName, path } = data;

                return (
                  <div
                    data-aos="fade-up"
                    data-aos-duration="2000"
                    key={index}
                    className="w-full lg:leading-8 lg:text-lg"
                  >
                    <Link
                      to={path}
                      className="no-underline text-gray-500 font-jost"
                    >
                      {linkName}
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="mt-14 font-jost text-center text-gray-500">
          &copy; {currentYear} GrainPlus Logistics. All rights reserved
        </div>
      </footer>
    </>
  );
};

export default Footer;
