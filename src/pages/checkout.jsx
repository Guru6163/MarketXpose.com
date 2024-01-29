import React from "react";
import SEO from "../common/seo";
import Checkout from "../components/checkout";

const index = () => {
  return (
    <>
      <SEO pageTitle={"MarketXpose - Checkout"} />
      <Checkout />
    </>
  );
};

export default index;
