import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/img/newlog.png";
import newGif from "../assets/img/new.gif";
import axios from "axios";

const Header = () => {
  const [menuItems] = useState([
    { path: "/webDesign", label: "Website Designing & Development" },
    { path: "/seo", label: "SEO Optimization" },
    { path: "/video", label: "Video Animation" },
    { path: "/domain", label: "Domain & Hosting" },
    { path: "/digital", label: "Digital Marketing" },
    { path: "/mobile", label: "Mobile App Development" },
    { path: "/software", label: "Software Development" },
    {
      path: "/companyregis",
      label: "Company Registration and E-Filing",
      isNew: true,
    },
    {
      path: "/trademark",
      label: "Trade Mark and ISO Certification",
      isNew: true,
    },
    { path: "/buisnesscons", label: "Business Consultancy", isNew: true },
    { path: "/ecommerce", label: "Ecommerce" },
    { path: "/graphics", label: "Graphics Designing" },
  ]);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const getProductList = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL_DEVELOPMENT}/api/v1/service`
      );
      setData(response.data?.data || []);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching product data:", error);
      toast.error("Failed to fetch product list.");
      setLoading(false);
    }
  };

  useEffect(() => {
    getProductList();
  }, []);
  const [toggle, setToggle] = useState(false);
  return (
    <>
      <div
        className="container-fluid"
        style={{
          background:
            "linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,1))",
        }}
      >
        <div className="container">
          <nav
            className="navbar navbar-dark navbar-expand-lg py-0 d-flex justify-content-between "
            style={{ zIndex: "999" ,alignItems: "center"}}
          >
            <Link
              to="/"
              className="navbar-brand ps-0"
              onClick={() => setToggle(false)}
            >
              <img src={logo} alt="logo" width="200" height="60"  />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              onClick={() => setToggle(!toggle)}
              // data-bs-toggle="collapse"
              // data-bs-target="#navbarCollapse"
              // aria-expanded="false"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className={`collapse navbar-collapse justify-content-end ${
                toggle ? "show" : ""
              }pe-0`}
              // id="navbarCollapse"
            >
              <div className="navbar-nav">
                <Link
                  to="/"
                  className="nav-item nav-link active"
                  style={{
                    fontSize: "16px",
                    fontWeight: "bold",
                    color: "black",
                  }}
                  onClick={() => setToggle(false)}
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="nav-item nav-link"
                  style={{
                    fontSize: "16px",
                    fontWeight: "bold",
                    color: "black",
                  }}
                  onClick={() => setToggle(false)}
                >
                  About
                </Link>
                <Link
                  to="/blog"
                  className="nav-item nav-link"
                  style={{
                    fontSize: "16px",
                    fontWeight: "bold",
                    color: "black",
                  }}
                  onClick={() => setToggle(false)}
                >
                  Blog
                </Link>
                <Link
                  to="/products"
                  className="nav-item nav-link"
                  style={{
                    fontSize: "16px",
                    fontWeight: "bold",
                    color: "black",
                  }}
                  onClick={() => setToggle(false)}
                >
                  Products
                </Link>
                <div className="nav-item dropdown">
                  <Link
                    to="#"
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                    style={{
                      fontSize: "16px",
                      fontWeight: "bold",
                      color: "black",
                    }}
                  >
                    Services
                  </Link>
                  <div className="dropdown-menu">
                    {data.map((item, index) => (
                      <Link
                        to={`/services/${item.slug}`}
                        className="dropdown-item"
                        key={index}
                        style={{
                          fontSize: "12px",
                          cursor: "pointer",
                        }}
                        onClick={() => setToggle(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
                <Link
                  to="/career"
                  className="nav-item nav-link"
                  onClick={() => setToggle(false)}
                  style={{
                    fontSize: "16px",
                    fontWeight: "bold",
                    color: "black",
                  }}
                >
                  Career
                </Link>
                <Link
                  to="/contact"
                  className="nav-item nav-link"
                  onClick={() => setToggle(false)}
                  style={{
                    fontSize: "16px",
                    fontWeight: "bold",
                    color: "black",
                  }}
                >
                  Contact
                </Link>
              </div>
            </div>
          </nav>
        </div>
      </div>

      {/* Responsive media query for small screens */}
      <style jsx>{`
        @media (max-width: 768px) {
          .navbar-brand img {
            width: 150px;
            height: auto;
          }
          .navbar-nav .nav-item {
            text-align: center;
            margin: 0.5rem 0;
          }
          .navbar-collapse {
            // background-color: rgba(255, 0, 0, 0.8);
          }
        }
      `}</style>
    </>
  );
};

export default Header;
