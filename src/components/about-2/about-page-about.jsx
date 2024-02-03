import Link from 'next/link';
import React from 'react';
import About from '../about/about-deatials-area';


const about_content_2 = {
  img: "/assets/img/about/ab-about-img.jpg",
  title: <>We help you build and grow your business.</>,
  description: <>MarketXpose  is not just a marketing agency; we are a team of passionate digital enthusiasts committed to unraveling the full potential of your business in the vast digital landscape. With a blend of creativity, technical expertise, and market insights, we specialize in creating bespoke social media strategies that resonate with your audience and drive tangible results.

    <br />
</>
}
const { img, title, description } = about_content_2


const AboutPageAbout = () => {
  return (
    <>
      <div className="about-page-about pt-120 pb-90">
        <div className="container">
          <div className="row align-items-md-center">
            <div className="col-xl-6 wow tpfadeUp">
              <div className="about-page-about-img mb-30">
                <img src={img} alt={title} />
              </div>
            </div>
            <div className="col-xl-6 wow tpfadeUp">
              <div className="about-page-ab">
                <div className="section-title-wraper">
                  <div className="tp-section">
                    <h2 className="tp-section__title mb-30">{title}</h2>
                    <p>{description}</p>
                  </div>
                </div>
                <div className="about-page-ab-btn-wrapper mb-30 wow tpfadeUp">

                  {/* <Link href="/service" className="tp-btn">
                    Our Services
                    <span>
                      <i className="fal fa-long-arrow-right"></i>
                      <i className="fal fa-long-arrow-right"></i>
                    </span>
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <About/>
    </>
  );
};

export default AboutPageAbout;