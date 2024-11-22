import React from "react";

const Specializations = () => {
  return (
    <div className="container-fluid specializations">
      <div className="container">
        <div className="text-center mb-5">
          <h2 style={{ color: "white", textDecoration: "none" }}>
            Our team of experts is dedicated to creating software solutions that
            not only meet but exceed your expectations. Our Specializations:
          </h2>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-4 col-sm-12 mb-4">
            <div
              style={{
                borderRadius: "10px",
                backgroundColor: "#007bff",
                padding: "10px",
                marginBottom: "5px",
              }}
            >
              Enterprise Resource Planning
            </div>
            <div
              style={{
                borderRadius: "10px",
                backgroundColor: "#2c1094",
                padding: "10px",
                marginBottom: "5px",
              }}
            >
              Supply Chain Management
            </div>
            <div
              style={{
                borderRadius: "10px",
                backgroundColor: "#007bff",
                padding: "10px",
                marginBottom: "5px",
              }}
            >
              Human Capital Management
            </div>
            <div
              style={{
                borderRadius: "10px",
                backgroundColor: "#007bff",
                padding: "10px",
                marginBottom: "5px",
              }}
            >
              Project Management Solution
            </div>
            <div
              style={{
                borderRadius: "10px",
                backgroundColor: "#1f0b79",
                padding: "10px",
              }}
            >
              Industry Application
            </div>
          </div>
          <div className="col-lg-9 col-md-8 col-sm-12">
            <h4>Enterprise Resource Planning</h4>
            <p>
              Future-proof your business with Brightcode ERP solutions, built
              using cutting-edge AI technologies to help you stay ahead of the
              curve.
            </p>
            <ul
              className="specialization-list"
              style={{ listStyleType: "disc", paddingLeft: "20px" }}
            >
              <li>Financials</li>
              <li>Project Management</li>
              <li>Procurement</li>
              <li>Maintenance</li>
              <li>Logistics</li>
              <li>Enterprise Performance Management</li>
              <li>Risk Management and Compliance</li>
              <li>ERP Analytics</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Specializations;
