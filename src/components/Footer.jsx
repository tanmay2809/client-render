import React from "react";
import { Link } from "react-router-dom"; // Import Link for internal navigation
import adminImg from "../assets/img/admin.jpg";
import {
  BsChatRight,
  BsFacebook,
  BsInstagram,
  BsLinkedin,
  BsMap,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";
import { FaAngleRight } from "react-icons/fa";
import {
  MdCall,
  MdLocationCity,
  MdLocationOn,
  MdOutlineEmail,
} from "react-icons/md";
const Footer = () => {
  return (
    <>
      <div
        className="container-fluid footer  wow fadeIn"
        data-wow-delay=".3s"
        style={{ background:
          "linear-gradient(102.2deg, rgb(250, 45, 66) 9.6%, rgb(245, 104, 104) 96.1%)"}}
      >
        <div className="container pt-5 pb-4">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <Link to="/">
                <h1 className="text-white fw-bold d-block">
                  <span className="text-secondary"></span>
                </h1>

                <img
                  src={adminImg}
                  alt="Admin"
                  width="100"
                  height="100"
                  style={{ borderRadius: "50%" }}
                />
              </Link>

              <p className="mt-4 text-light">Abhishek Shahdeo</p>
              <span className="text-light"> (Managing Director)</span>
              <p className="text-light">
                IT is critical in website development, digital marketing, mobile
                app creation, and business operations. A well-designed website
                boosts credibility and serves as a powerful marketing tool.
              </p>
            </div>

            <div className="col-lg-3 col-md-6">
              <Link to="#" className="h3 text-white">
                Short Link
              </Link>
              <div className="mt-4 d-flex flex-column short-link">
                <Link to="/about" className="mb-2 text-white">
                  <FaAngleRight className=" text-white me-2" />
                  About us
                </Link>
                <Link to="/contact" className="mb-2 text-white">
                  <FaAngleRight className=" text-white me-2" />
                  Contact us
                </Link>
                <Link to="/" className="mb-2 text-white">
                  <FaAngleRight className=" text-white me-2" />
                  Our Services
                </Link>
                <Link to="/admin" className="mb-2 text-white">
                  <FaAngleRight className=" text-white me-2" />
                  Admin
                </Link>
                <Link to="/blog" className="mb-2 text-white">
                  <FaAngleRight className=" text-white me-2" />
                  Latest Blog
                </Link>

                <div className="d-flex hightech-link">
                  <a
                    href="https://www.facebook.com/symbosystech/"
                    className="btn-light nav-fill btn btn-square rounded-circle me-2"
                  >
                    <BsFacebook size={22} className="text-primary" />
                  </a>
                  <a
                    href="https://twitter.com/SymbosysTech"
                    className="btn-light nav-fill btn btn-square rounded-circle me-2"
                  >
                    <BsTwitter size={22} className="text-primary" />
                  </a>
                  <a
                    href="https://www.instagram.com/symbosys/"
                    className="btn-light nav-fill btn btn-square rounded-circle me-2"
                  >
                    <BsInstagram size={22} className="text-primary" />
                  </a>
                  <a
                    href="https://www.youtube.com/@Symbosys"
                    className="btn-light nav-fill btn btn-square rounded-circle me-2"
                  >
                    <BsYoutube size={22} className="text-primary" />
                  </a>
                  <a
                    href="https://in.linkedin.com/company/symbosys"
                    className="btn-light nav-fill btn btn-square rounded-circle me-0"
                  >
                    <BsLinkedin size={22} className="text-primary" />
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <Link to="#" className="h3 text-white">
                Help Link
              </Link>
              <div className="mt-4 d-flex flex-column help-link">
                <Link to="/terms" className="mb-2 text-white">
                  <FaAngleRight className=" text-white me-2" />
                  Terms & Conditions
                </Link>
                <Link to="/privacy" className="mb-2 text-white">
                  <FaAngleRight className=" text-white me-2" />
                  Privacy Policy
                </Link>
                <Link to="/contact" className="mb-2 text-white">
                  <FaAngleRight className=" text-white me-2" />
                  Helps
                </Link>
                <Link to="/help" className="mb-2 text-white">
                  <FaAngleRight className=" text-white me-2" />
                  FQAs
                </Link>
                <Link to="/contact" className="mb-2 text-white">
                  <FaAngleRight className=" text-white me-2" />
                  Contact
                </Link>
              </div>
            </div>

            <div className="col-lg-3 col-md-6">
              <Link to="#" className="h3 text-white">
                Contact Us
              </Link>
              <div className="text-white mt-4 d-flex flex-column contact-link">
                <a href="#" className="pb-3 text-light">
                  <MdLocationOn size={22} className=" text-white me-2" />
                  Plot No.9, New AG Colony, Kadru, Ranchi, 834002
                </a>
                <a href="#" className="pb-3 text-light">
                  <MdLocationOn size={22} className=" text-white me-2" />
                  Noida-Sector -51, Near Shivalik Hospital, Noida, 201301
                </a>
                <a
                  href="#"
                  className="pb-3 text-light border-bottom border-primary"
                >
                  <MdLocationOn size={22} className=" text-white me-2" />
                  Hyderabad-Plot No.1, Sai Ram Nagar Colony, Hyderabad, 500079
                </a>
                <a
                  href="tel:+91 9122010150"
                  className="py-3 text-light border-bottom border-primary"
                >
                  <MdCall size={22} className=" text-white me-2" />
                  +91 9122010150
                </a>
                <a
                  href="mailto:info@support.com"
                  className="py-3 text-light border-bottom border-primary"
                >
                  <MdOutlineEmail size={22} className=" text-white me-2" />
                  support@symbosys.com
                </a>
              </div>
              <br />
            </div>
          </div>

          <hr className="text-light mt-5 mb-4" />
          <div className="row">
            <div className="col-md-6 text-center text-md-start">
              <span className="text-light">
                <Link to="#" className="text-white">
                  <i className="fas fa-copyright text-primary me-2"></i>
                  Privacy Policy | Copyright © 2015-2024 Symbosys Technology
                  Pvt. Ltd
                </Link>
              </span>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <span className="text-light">
                All rights Reserved by :
                <Link to="/symbosys" className="text-white">
                  Symbosys
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* <a
        href="#"
        className="btn btn-primary btn-square rounded-circle back-to-top"
      >
        <i className="fa fa-arrow-up text-white"></i>
      </a> */}
    </>
  );
};

export default Footer;
