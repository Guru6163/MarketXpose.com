import React from "react";


// service_data
const service_data = [
  {
    id: 1,
    counter: "01",
    title: <> Social Media <br /> Management </> ,
    des:  <>We make social media easy. Let our team handle the posting and community management for you.</>,
    delay: ".4s",
    list_item: [
      "Hassle-free social media posting and community management.",
      "Consistent and strategic content scheduling.",
      "Enhances brand presence and engagement.",
    ],
  },
  {
    id: 2,
    counter: "02",
    title: <> Paid <br /> Advertising </> ,
    des: <>We can help you identify and get in front of your ideal client / buyer profile - with the most economical and widest reaching platforms available today.</> ,
    delay: ".5s",
    list_item: [
      "Identify and target ideal client/buyer profiles",
      "Utilize economical and wide-reaching advertising platforms",
      "Drive traffic and increase exposure through strategic ad campaigns",
    ],
  },
  
  {
    id: 3,
    counter: "03",
    title:  <> Web <br /> Development </> ,
    des:  <>We can help your brand look great online. We create easy to use, simple websites to get your business noticed </>,
    delay: ".5s",
    list_item: [
      "Create easy-to-use, visually appealing websites",
      "Enhance online presence for increased brand visibility",
      "Focus on simplicity to engage and captivate visitors",
    ],
  },
  {
    id: 4,
    counter: "04",
    title:  <> Search Engine <br /> Optimization </> ,
    des:  <>Our team can help you rank in the eyes of the search engines so that you get noticed by your ideal client / buyer profiles  </>,
    delay: ".5s",
    list_item: [
      "Boost search engine rankings for increased visibility",
      "Optimize website content to attract ideal clients",
      "Implement effective strategies to improve online search presence",
    ],
  },
  {
    id: 5,
    counter: "05",
    title:  <> Email <br /> Marketing </> ,
    des:  <>Email marketing can be your brand secret weapon - Constantly reminding your customers about you so that they never forget to buy</>,
    delay: ".5s",
    list_item: [
      "Leverage email as a powerful brand reminder",
      "Implement strategic email campaigns to nurture customer relationships",
      "Utilize email marketing as a secret weapon for consistent customer engagement",
    ],
  },
  {
    id: 6,
    counter: "06",
    title:  <> Funnel  <br /> Building </> ,
    des:  <>We can help you create a simple funnel that captures your leads and converts them into buyers</>,
    delay: ".5s",
    list_item: [
      "Create effective and straightforward sales funnels",
      "Capture leads and convert them into buyers",
      "Streamline the customer journey for increased conversions",
    ],
  },
];



const ServiceArea = () => {
  return (
    <>
      <div id="services" className="tp-da-service-area pt-110 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="section-title-wraper text-center mb-60">
                <div className="tp-section">
                  <span className="tp-section__subtitle mb-15 shadow-none text-grey p-0 wow tpfadeUp ">
                    Our Services
                  </span>
                  <h2
                    className="tp-section__title mb-30 wow tpfadeUp"
                    data-wow-delay=".3s"
                  >
                    Service We <span>Provide</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            {service_data.map((item, i) => (
              <div key={i} className="col-xl-4 col-lg-6">
                <div
                  className="da-service pr-30 pl-30 mb-30 wow tpfadeUp"
                  data-wow-delay=".4s"
                >
                  <div className="d-flex justify-content-between align-items-center mb-15">
                    <h3 className="da-service__title ">{item.title}</h3>
                    <div className="da-service__counter">{item.counter}</div>
                  </div>
                  <div className="da-service__list-box white-bg">
                    <p>{item.des}</p>
                    <ul>
                      {item.list_item.map((list, i) => (
                        <li key={i}>
                          {list}
                          <span>
                            <i className="fal fa-check"></i>
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceArea;
