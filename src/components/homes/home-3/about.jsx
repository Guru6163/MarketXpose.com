import React from "react";
import Link from "next/link";
import Tilt from "react-parallax-tilt";


const About = () => {
  return (
    <>
      <div className="tp-da-about pt-120 pb-90">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 wow tpfadeUp" data-wow-delay=".3s">

              <Tilt
                className="tilt-img"
                tiltMaxAngleX={5}
                tiltMaxAngleY={5}
                perspective={900}
                transitionSpeed={1000}
                gyroscope={true}
              >
                <div
                  className="da-about-img mb-30"
                  data-tilt=""
                  data-tilt-perspective="2000"
                >
                  <img src="/assets/img/about/da-about-1.jpg" alt="about-img" />
                </div>
              </Tilt>


            </div>
            <div className="col-lg-6 wow tpfadeUp" data-wow-delay=".5s">
              <div className="tp-da-about-info mb-30">
                <div className="section-title-wraper">
                  <div className="tp-section">
                    <h2 className="tp-section__title mb-30">
                      Ignite your business's success with compelling <span>solutions.</span>{" "}
                    </h2>

                  </div>
                </div>
                <div className="tp-da-about-fea pb-25 mb-10">
                  <ul>
                    <li>
                      <span>
                        <i className="fal fa-check"></i>
                      </span>
                      Features include Strategic Social Media Marketing
                    </li>
                    <li>
                      <span>
                        <i className="fal fa-check"></i>
                      </span>
                      We strongly believe in providing innovative digital solutions
                    </li>
                  </ul>
                </div>
                <div className="tp--indo-btns d-flex flex-wrap align-items-center">
                  <div className="tp-da-link-btn mr-30 mb-30">
                    <Link href="https://calendly.com/market-xpose/marketxpose-strategy-meeting" className="tp-grd-btn">
                      connect with us
                      <span className="ml-10">
                        <i className="fal fa-long-arrow-right"></i>
                        <i className="fal fa-long-arrow-right"></i>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
