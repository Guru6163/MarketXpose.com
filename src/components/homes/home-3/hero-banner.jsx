import React from "react";
import Link from 'next/link';
import Tilt from "react-parallax-tilt";
import { TypeAnimation } from "react-type-animation";



const HeroBanner = () => {


 const handleClick = () => {
    const servicesElement = document.getElementById('services');

    if (servicesElement) {
      servicesElement.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <>
      <div className="tp-da-hero pb-80 pt-80">
        <div className="container">
          <div className="row">
            <div className="col-lg-5">
              <div className="da-hero-section mt-40">
                <div className="cd-intro">
                  <h3 className="da-hero-section__title cd-headline loading-bar mb-45 wow tpfadeUp" data-wow-delay=".3s">
                    <span>Revolutionize your business with </span>
                    <span className="cd-words-wrapper text_style">
                      <TypeAnimation
                        sequence={[
                          'Cutting-edge Solutions.',
                          2000,
                          'Digital Expertise.',
                          3000,
                          'MarketXpose Advantage.',
                          4000
                        ]}
                        wrapper="div"
                        cursor={false}
                        repeat={Infinity}
                      />
                    </span>
                  </h3>


                </div>
              </div>
              <div
                className="da-header-grd-btn d-inline-block mr-20 mb-30 wow tpfadeUp"
                data-wow-delay=".3s"
              >
                <div onClick={handleClick} className="tp-grd-btn">
                  Our Services
                  <span className="ml-10">
                    <i className="fal fa-long-arrow-right"></i>
                    <i className="fal fa-long-arrow-right"></i>
                  </span>
                </div>
              </div>
              {/* <div
                className="da-header-gey-btn d-inline-block mb-30 wow tpfadeUp"
                data-wow-delay=".5s"
              >
                <Link href="/portfolio-4" className="tp-grey-btn">
                  Case study
                  <span className="ml-10">
                    <i className="fal fa-long-arrow-right"></i>
                    <i className="fal fa-long-arrow-right"></i>
                  </span>
                  <b></b>
                </Link>
              </div> */}
            </div>

            <div
              className="col-lg-7 wow tpfadeUp"
              data-tilt=""
              data-tilt-perspective="2000"
              data-wow-delay=".3s"
            >
              <Tilt
                className="tilt-img"
                tiltMaxAngleX={5}
                tiltMaxAngleY={5}
                perspective={900}
                transitionSpeed={1000}
                gyroscope={true}
              >

                <div className="tp-da-hero-img text-end pr-30">
                  <img src="/assets/img/hero/da-hero-img.jpg" alt="" />
                </div>
                <div className="da-hero-black-box bg-black float-end">
                  <span>
                    <a href="mailto:team@marketxpose.com">team@marketxpose.com</a>
                  </span>
                  <span className="float-end">
                    <a href="mailto:team@marketxpose.com">
                      Our Portfolio <i className="fal fa-long-arrow-right"></i>
                    </a>
                  </span>
                </div>
              </Tilt>
            </div>



          </div>
        </div>
      </div>
    </>
  );
};

export default HeroBanner;
