import BreadcrumbArea from "@/src/common/breadcrumb-area";
import MapArea from "@/src/common/map-area";
import Footer from "@/src/layout/footers/footer";
import Header from "@/src/layout/headers/header";
import React from "react";
import ContactArea from "./contact-area";
import HeaderThree from "@/src/layout/headers/header-3";
import RequestSubmitForm from "@/src/forms/request-submit-form";

const Contact = () => {
  return (
    <>
      <HeaderThree />
      <BreadcrumbArea acive_menu="Contact" title="Get In Touch" />
      <RequestSubmitForm/>
      <ContactArea />
      <MapArea />
      <Footer />
    </>
  );
};

export default Contact;
