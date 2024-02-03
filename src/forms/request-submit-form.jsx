import React from "react";
import { motion } from "framer-motion";

const RequestSubmitForm = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  return (
    <motion.div
      className="pt-40"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <form
        onSubmit={(e) => e.preventDefault()}
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          padding: "20px",
          boxSizing: "border-box",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
          borderRadius: "10px",
          backgroundColor: "#fff",
        }}
      >
        <div className="row">
          <motion.div
            className="col-lg-6"
            style={{ marginBottom: "15px" }}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1, transition: { delay: 0.2 } }}
          >
            <div className="input-item">
              <input
                type="text"
                placeholder="Full name"
                style={{
                  width: "100%",
                  padding: "12px",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                }}
              />
            </div>
          </motion.div>
          <motion.div
            className="col-lg-6"
            style={{ marginBottom: "15px" }}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1, transition: { delay: 0.4 } }}
          >
            <div className="input-item">
              <input
                type="text"
                placeholder="Email address"
                style={{
                  width: "100%",
                  padding: "12px",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                }}
              />
            </div>
          </motion.div>
          <motion.div
            className="col-12"
            style={{ marginBottom: "15px" }}
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { delay: 0.6 } }}
          >
            <div className="input-item-textarea">
              <textarea
                placeholder="Message"
                style={{
                  width: "100%",
                  padding: "12px",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                }}
              ></textarea>
            </div>
          </motion.div>
          <motion.div
            className="col-12"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1, transition: { delay: 0.8 } }}
          >
            <button
              type="submit"
              className="it-cta-form-submit border-0"
              style={{
                width: "100%",
                padding: "12px",
                backgroundColor: "#007BFF",
                color: "#fff",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: "16px",
                fontWeight: "bold",
              }}
            >
              Submit Request
            </button>
          </motion.div>
        </div>
      </form>
    </motion.div>
  );
};

export default RequestSubmitForm;
