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
      <footer className="w-full bg-green-800 overflow-hidden py-16">
        <div className="h-1 bg-white mb-8 rounded-full max-w-[1200px] mx-auto"></div>
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 md:px-8 lg:px-16">
          <div className="md:col-span-1">
            <div>
              <Link to="/" className="text-white">
                <h1
                  data-aos="fade-up"
                  data-aos-duration="2000"
                  className="site-title tracking-widest uppercase"
                >
                  GrainPlus Logistics <br /> <br />
                </h1>
              </Link>

              <div className="mt-4 text-white space-y-3">
                <div>
                  <span className="font-semibold">Address: </span> Off KM 11,
                  Hadejia Road, Kano, Nigeria.
                </div>
                <div>
                  <span className="font-semibold">Email: </span>{" "}
                  info@grainplus.org
                </div>
                <div>
                  <span className="font-semibold">Phone: </span> +234 809 360
                  5855
                </div>
              </div>
            </div>
          </div>
          <div>
            <h2 className="section-title text-white tracking-wide uppercase">
              Quick Links
            </h2>
            <div className="mt-6 space-y-3">
              {topLinkNavLinks.map((data, index) => (
                <div key={index} className="text-white">
                  <Link
                    to={data.linkPath}
                    className="no-underline hover:text-gray-200"
                  >
                    {data.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="section-title text-white tracking-wide uppercase">
              Support
            </h2>
            <div className="mt-6 space-y-3">
              {supportLinks.map((data, index) => (
                <div key={index} className="text-white">
                  <Link
                    to={data.path}
                    className="no-underline hover:text-gray-200"
                  >
                    {data.linkName}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-14 font-jost text-center text-white ">
          &copy; {currentYear} GrainPlus Logistics. All rights reserved.
        </div>
      </footer>
    </>
  );
};

export default Footer;
