import BreadcrumbArea from "@/src/common/breadcrumb-area";
import Footer from "@/src/layout/footers/footer";
import Header from "@/src/layout/headers/header";
import React from "react";
import AboutDetails from "./about-details";
import Brand from "./brand";
import HeaderThree from "@/src/layout/headers/header-3";

const AboutThree = () => {
  return (
    <>
      <HeaderThree />
      <BreadcrumbArea acive_menu="About V3"  title="Our Company Histoy"/>
      <AboutDetails />
      <Brand />
      <Footer />
    </>
  );
};

export default AboutThree;
