import React from "react";

const MapArea = () => {
  return (
    <>
      <div className="tp-contact-map p-relative">
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d249066.54183489388!2d79.06050695046268!3d12.67244340839696!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bace97e0701a9c3%3A0xfa2404a9e2090bf1!2sArni%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1658828924640!5m2!1sen!2sin"
            style={{ border: "0px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

        </div>

      </div>
    </>
  );
};

export default MapArea;
