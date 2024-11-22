import React from "react";
import cone from "../assets/img/C_1.png";
import aboutt2 from "../assets/img/aboutt2.png";
import { Link } from "react-router-dom";
const AboutHome = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="custom-sectiones row">
          {/* Text Section */}
          <div className="text-contentes col-md-6 col-12">
            <h2 style={{ color: "orangered", fontSize: "24px" }}>
              Symbosys Technologies: THE BEST SOFTWARE COMPANY IN Jharkhand
            </h2>
            <h4 style={{ fontSize: "22px" }}>
              ISO 9001: 2015 Certified IT Company
            </h4>
            <hr
              style={{
                width: "160px",
                height: "5px",
                backgroundColor: "hsl(0, 83%, 47%)",
                border: "none",
              }}
            />
            <p style={{ fontSize: "14px", textAlign: "justify" }}>
              Introducing Symbosys Technologies Pvt. Ltd. – the beacon of
              innovation in Ranchi's dynamic IT landscape. As an ISO powerhouse,
              we design custom software, develop captivating e-commerce
              platforms, and create seamless mobile applications. A decade's
              worth of expertise pushes us further than others do by merging
              cutting-edge technology with limitless creativity. Come and be
              part of an odyssey where excellence knows no bounds. Welcome to
              SYMBOSYS — where dreams take a digital form.
            </p>
            <Link
              to="/about"
              className="read-moress"
              style={{
                marginBottom: "10px",
                display: "inline-block",
                padding: "10px 20px",
                backgroundColor: "orangered",
                color: "#fff",
                textDecoration: "none",
                borderRadius: "5px",
                fontSize: "14px",
              }}
            >
              Read more
            </Link>
          </div>
          {/* Image Section */}
          <div className="image-contentes col-md-6 col-12 text-center">
            <img
              src={cone}
              alt="Illustration of software services"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="custom-sections row">
          {/* Image Section */}
          <div className="image-contents col-md-6 col-12 text-center">
            <img
              src={aboutt2}
              alt="Illustration of software services"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          {/* Text Section */}
          <div className="text-contents col-md-6 col-12">
            <h2 style={{ fontSize: "24px" }}>
              Elevating your digital presence with{" "}
              <span style={{ color: "orange" }}>Expert Software Services</span>
            </h2>
            <p style={{ fontSize: "14px", textAlign: "justify" }}>
              Transform Your Business with Expert Software Solutions. Our
              advanced software solutions are designed to streamline operations
              and improve customer service for businesses to thrive. Utilizing
              our technology, companies can achieve unparalleled service quality
              and significant growth, strengthening their market leadership.
            </p>
            <p style={{ fontSize: "14px", textAlign: "justify" }}>
              Discover our suite of highly interactive and customer-engaging
              software offerings, including:
            </p>
            <ul style={{ fontSize: "14px" }}>
              <li>ERP Systems</li>
              <li>CRM Software</li>
              <li>School Management Systems</li>
              <li>Hotel Management Software</li>
              <li>Custom Software Development</li>
            </ul>
            <p style={{ fontSize: "14px", textAlign: "justify" }}>
              Join us at Symbosys, where every solution is a testament to our
              commitment to your success.
            </p>
            <a
              href="/services/software-development"
              className="read-more"
              style={{
                display: "inline-block",
                backgroundColor: "orangered",
                color: "white",
                padding: "10px 20px",
                textDecoration: "none",
                borderRadius: "5px",
                transition: "background-color 0.3s ease",
                fontSize: "14px",
              }}
            >
              Read more
            </a>
          </div>
        </div>
      </div>
      <style jsx>{`
        @media (max-width: 768px) {
          .text-contentes h2 {
            font-size: 18px;
          }
          .text-contentes h4 {
            font-size: 16px;
          }
          .text-contentes p {
            font-size: 13px;
          }
          .read-moress,
          .read-more {
            padding: 8px 16px;
            font-size: 12px;
          }
          ul {
            font-size: 13px;
          }
          .image-contentes img,
          .image-contents img {
            width: 100%;
            height: auto;
          }
        }
      `}</style>
    </>
  );
};

export default AboutHome;
