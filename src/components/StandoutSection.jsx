import React from "react";
import hone from "../assets/img/H_1.png";

const StandoutSection = () => {
  return (
    <div className="standout-section" style={{ backgroundColor: "lightblue" }}>
      <h1>What makes Symbosys Standout From the Crowd?</h1>
      <div className="standout-features">
        <div className="feature">
          <img src={hone} alt="Expertise and Experience" />
          <h2>Expertise and Experience</h2>
          <p>
            Our team of software experts has extensive experience in developing
            and implementing software solutions for businesses of all sizes.
          </p>
        </div>
        <div className="feature">
          <img src={hone} alt="Customized Solutions" />
          <h2>Customized Solutions</h2>
          <p>
            We understand that every business is unique, and therefore, we offer
            customized software solutions tailored to meet your specific
            requirements.
          </p>
        </div>
        <div className="feature">
          <img src={hone} alt="Customer-centric Approach" />
          <h2>Customer-centric Approach</h2>
          <p>
            We take a customer-centric approach to our work, putting our
            clients' needs and satisfaction at the forefront of everything we
            do.
          </p>
        </div>
      </div>
    </div>
  );
};

export default StandoutSection;
