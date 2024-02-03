import React from 'react';


const about_details_content = {
   title: <>With experience from top companies</>,

   info_2000_title: <>We got featured from <span>Awwrds </span></>,

   info_2000: <>Shall over firmament, above there won't image wherein winged moveth twoes
      heaven green, the whose had so let evening forth together given form make. Red
      moved years face our may male female.</>,

   info_2010_title: <>We got featured from <span>Themeforest</span></>,
   info_2010: <>Shall over firmament, above there won't image wherein winged moveth twoes
      heaven green, the whose had so let evening forth together given form make. Red
      moved years face our may male female.</>,

   info_2018_title: <>We got featured from <span>buyers</span></>,
   info_2018: <>Shall over firmament, above there won't image wherein winged moveth twoes
      heaven green, the whose had so let evening forth together given form make. Red
      moved years face our may male female.</>,


   info_2022_title: <>We got featured from <span>Your</span></>,
   info_2022: <>Shall over firmament, above there won't image wherein winged moveth twoes
      heaven green, the whose had so let evening forth together given form make. Red
      moved years face our may male female.</>,

}

const {
   title,
   info_2000_title,
   info_2000,
   info_2010_title,
   info_2010,
   info_2018_title,
   info_2018,
   info_2022_title,
   info_2022 } = about_details_content


const AboutDeatialsArea = () => {
   return (
      <>
         <div className="tp-about-deatials-service theme-bg pt-120 pb-90">
            <div className="container">
               <div className="row">
                  <div className="col-xl-6 wow tpfadeUp">
                     <div className="tp-about-sv-content">
                        <h3 className="tp-section__title wow tpfadeUp mb-50">{title}</h3>
                     </div>
                     <div style={{ fontSize: "18px" }}>
                        Our mission at MarketXpose is to empower businesses, both big and small, to navigate the complex world of social media with confidence. We strive to demystify the digital realm, ensuring that your brand not only survives but thrives in an ever-evolving online environment. We aim to be your trusted partner in the journey of digital transformation, offering tailor-made solutions that align with your unique goals.


                     </div>

                  </div>
                  <div className="col-xl-6 wow tpfadeUp">
                     <div className="about-sv-img">
                        <img src="/assets/img/services/about-service.jpg" alt="" />
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};

export default AboutDeatialsArea;