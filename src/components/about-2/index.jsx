import BreadcrumbArea from "@/src/common/breadcrumb-area";
import Footer from "@/src/layout/footers/footer";
import Header from "@/src/layout/headers/header";
import React from "react";
import AbFactAreaTwo from "./ab-fact-area-2";
import AboutPageAbout from "./about-page-about";
import FeatureArea from "./feature-area";
import OurTeam from "./our-team";
import HeaderThree from "@/src/layout/headers/header-3";

const AboutTwo = () => {
  return (
    <>
      <HeaderThree />
      <BreadcrumbArea acive_menu="About" title="Abous Us" />
      <AboutPageAbout />
      <Footer />
    </>
  );
};

export default AboutTwo;
