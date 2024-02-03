import React from "react";

const contact_data = [
  {
    id: 1,
    titel: "Become a client",
    email: "team@marketxpose.com",
    phone: "+91-9940616163",
    tel: "",
  },

];

// contact_info
const contact_info = {
  img: "/assets/img/cta/contact-page-1.jpg",
  hi_text: "Say Hello",
  title: <>The feeling is mutual. These are the best ways to make it happen.</>,
};

const { img, hi_text, title } = contact_info;

const ContactArea = () => {
  return (
    <>
      <div className="contact-page-area pt-120 pb-90 wow tpfadeUp">
        <div className="container">
          <div className="row">
              <div style={{display:"flex",justifyContent:"center"}} className="row">
                {contact_data.map((item, i) => (
                  <div key={i} className="col-lg-3">
                    <div className="contact-cta-item mb-30">
                      <b>{item.titel}</b> <br />
                      <a href={`mailto:${item.email}`}>{item.email}</a> <br />
                      <a href={`tel:${item.tel}`}>{item.phone}</a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
      </div>
    </>
  );
};

export default ContactArea;
