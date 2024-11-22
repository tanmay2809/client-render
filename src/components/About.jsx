import React, { useEffect, useState } from "react";
import aboutImage from "../assets/img/aboutnew.png";
import missionImage from "../assets/img/mission.png";
import visionImage from "../assets/img/vision.png";
import coreValuesImage from "../assets/img/core-values.webp";
import "./about.css";
import axios from "axios";
const About = () => {
  const [data, setData] = useState({});
  console.log("about data", data);

  useEffect(() => {
    const fetchAbout = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL_DEVELOPMENT}/api/v1/about`
        );
        const aboutData = response.data?.data[0];
        if (aboutData) {
          setData(aboutData);
          // setAboutId(aboutData._id);
        }
      } catch (err) {
        console.error("Error fetching About: ", err);
      }
    };
    fetchAbout();
  }, []);
  return (
    <>
      <div
        style={{
          minHeight: "100vh",
          height: "100%",
          margin: "0",
          padding: "0",
        }}
      >
        <div className="container-fluid">
          <div
            className="content-section"
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              gap: "20px",
              flexWrap: "wrap",
            }}
          >
            <div style={{ flex: "1 1 40%", maxWidth: "400px" }}>
              <img
                src={aboutImage}
                alt="Illustration"
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "10px",
                  boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                }}
              />
            </div>
            <div style={{ flex: "1 1 60%", minWidth: "300px" }}>
              <h2
                style={{
                  textDecoration: "none",
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: "600",

                  paddingBottom: "5px",
                  marginBottom: "15px",
                }}
              >
                About Symbosys Software Services Pvt. Ltd.
              </h2>
              <p
                style={{
                  fontSize: "17px",
                  textAlign: "justify",
                  lineHeight: "2rem",
                  color: "#555",
                }}
              >
                {data.main_about}
              </p>
            </div>
          </div>
        </div>
        <div className="container-fluid py-5 my-5">
          <div className="container pt-5">
            <div className="row g-5">
              <div
                className="col-lg-5 col-md-6 col-sm-12 wow fadeIn"
                data-wow-delay=".3s"
              >
                <div className="h-100 position-relative">
                  <img
                    src={missionImage}
                    className="img-fluid w-75 rounded"
                    alt="Mission"
                    height="300px"
                    width="400px"
                    style={{ marginBottom: "15%" }}
                  />
                  <div
                    className="position-absolute w-75"
                    style={{ top: "25%", left: "25%" }}
                  >
                    <img src="#" className="img-fluid w-100 rounded" alt="" />
                  </div>
                </div>
              </div>
              <div
                className="col-lg-7 col-md-6 col-sm-12 wow fadeIn"
                data-wow-delay=".5s"
              >
                <h1
                  style={{
                    textDecoration: "none",
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: "600",

                    paddingBottom: "5px",
                    marginBottom: "15px",
                    fontSize: "35px",
                  }}
                  className="mb-4 text-danger"
                >
                  Our Mission:
                </h1>
                <p
                  style={{
                    lineHeight: "2rem",

                    textAlign: "justify",

                    fontSize: "17px",

                    color: "#555",
                  }}
                >
                  {data.mission}
                </p>
                {/* <p
                className="mb-4"
                style={{ lineHeight: "2rem", fontSize: "18px" }}
              >
                We, here at Symbosys, ensure the sharing of all software
                knowledge widely and deliver high-quality software solutions in
                effectively meeting real-life challenges. We aim to become the
                prime global software solutions provider for education, travel,
                and e-commerce. Our main focus is on creating tailor-made
                software applications that fully satisfy the needs of our
                clients, leaving them the most content and delighted.
              </p> */}
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid">
          {/* Vision Section */}
          <div className="custom-section ">
            <div className="text-content">
              <h2 style={{ textDecoration: "none",
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: "600",

                    paddingBottom: "5px",
                    marginBottom: "15px",
                    fontSize: "35px",}} className="vision-title">
                Our Vision:
              </h2>
              <p
                style={{
                  lineHeight: "2rem",

                  textAlign: "justify",

                  fontSize: "17px",

                  color: "#555",
                }}
              >
                {data.vision}
              </p>
            </div>
            <div className="image-content">
              <img
                src={visionImage}
                alt="Illustration of software services"
                className="img-fluid"
              />
            </div>
          </div>

          {/* Core Values Section */}
          <div className="container-fluid py-5 my-5">
            <div className="container pt-5">
              <div className="row g-5">
                <div
                  className="col-lg-5 col-md-6 col-sm-12 wow fadeIn"
                  data-wow-delay=".3s"
                >
                  <div className="h-100 position-relative">
                    <img
                      src={coreValuesImage}
                      className="img-fluid w-75 rounded"
                      alt="Core Values"
                      height="300px"
                      width="400px"
                      style={{ marginBottom: "15%" }}
                    />
                    <div
                      className="position-absolute w-75"
                      style={{ top: "25%", left: "25%" }}
                    >
                      <img src="#" className="img-fluid w-100 rounded" alt="" />
                    </div>
                  </div>
                </div>
                <div
                  className="col-lg-7 col-md-6 col-sm-12 wow fadeIn"
                  data-wow-delay=".5s"
                >
                  <h1 className="mb-4 text-danger" style={{textDecoration: "none",
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: "600",

                    paddingBottom: "5px",
                    marginBottom: "15px",
                    fontSize: "35px"}}>Core Value</h1>
                  <p
                    style={{
                      lineHeight: "2rem",

                  textAlign: "justify",

                  fontSize: "17px",

                  color: "#555",
                    }}
                  >
                    {data.core_value}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
