import React from "react";
import Banner from "./components/banner";
import "./assets/sass/about.scss";
import ChooseUs from "../../components/chooseUs";
import AboutSales from "./components/aboutSales";
import SalesTwo from "./components/salesTwo";
import ContactRef from "../../components/contactRef";

const About = () => {
  return (
    <>
      <Banner />
      <ChooseUs />
      <AboutSales />
      <SalesTwo />
      <ContactRef />
    </>
  );
};

export default About;
