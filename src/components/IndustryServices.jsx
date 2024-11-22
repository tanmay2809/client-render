import React from "react";
import {
  FaGraduationCap,
  FaUtensils,
  FaBuilding,
  FaGlassCheers,
  FaUniversity,
  FaTruck,
  FaStar,
  FaCar,
  FaPlane,
  FaHeartbeat,
  FaSeedling,
  FaPiggyBank,
  FaHotel,
  FaConciergeBell,
  FaPepperHot,
  FaSolarPanel,
  FaLaptopCode,
  FaGamepad,
  FaTshirt,
  FaGem,
} from "react-icons/fa";

const IndustryServices = () => {
  const services = [
    { icon: <FaGraduationCap />, title: "Education & Institutions" },
    { icon: <FaUtensils />, title: "Restaurant" },
    { icon: <FaBuilding />, title: "Constructions" },
    { icon: <FaGlassCheers />, title: "Beverages" },
    { icon: <FaUniversity />, title: "Colleges & University" },
    { icon: <FaTruck />, title: "Transportation" },
    { icon: <FaStar />, title: "Astrology" },
    { icon: <FaCar />, title: "Automotive" },
    { icon: <FaPlane />, title: "Tour & Travel" },
    { icon: <FaHeartbeat />, title: "Health" },
    { icon: <FaSeedling />, title: "Agriculture" },
    { icon: <FaPiggyBank />, title: "Banking & Financial" },
    { icon: <FaHotel />, title: "Hotel" },
    { icon: <FaConciergeBell />, title: "Hospitality" },
    { icon: <FaPepperHot />, title: "Foods & Spices" },
    { icon: <FaSolarPanel />, title: "Solar Enterprises" },
    { icon: <FaLaptopCode />, title: "IT Services" },
    { icon: <FaGamepad />, title: "Gaming" },
    { icon: <FaTshirt />, title: "Fashion & Wear" },
    { icon: <FaGem />, title: "Jewellery" },
  ];

  return (
    <div className="container-fluid industry-services">
      <div className="container">
        <div className="text-center">
          <h2>
            We offer managed IT services that are tailored to meet the unique
            needs of your industry
          </h2>
        </div>
        <div className="row">
          {services.map((service, index) => (
            <div className="col-md-3" key={index}>
              <div
                className="service-item"
                style={{ textAlign: "center", margin: "20px 0" }}
              >
                <div style={{ fontSize: "40px", color: "#007bff" }}>
                  {service.icon}
                </div>
                <h4>{service.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndustryServices;
