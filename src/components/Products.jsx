import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const products = [
  { title: "E-commerce Website", link: "E-Commerce-Website" },
  { title: "Informative Website", link: "Informative-Website" },
  { title: "Blogs & News Website", link: "Blog-News-Website" },
  { title: "NGO & Non-profit Websites", link: "NGO-Website" },
  { title: "Educational Websites", link: "Educational-Website" },
  { title: "Social Media Websites", link: "Social-Media-Website" },
  { title: "Business Website", link: "Business-Website" },
  { title: "Personal Websites", link: "Personal-Website" },
  {
    title: "School Management Software",
    link: "School-Management-Software",
  },
  {
    title: "College Management Software",
    link: "College-Management-Software",
  },
  {
    title: "Hospital Management Software",
    link: "Hospital-Management-Software",
  },
  {
    title: "Hotel Management Software",
    link: "Hotel-Management-Software",
  },
  {
    title: "Restaurant Management Software",
    link: "Restaurant-Management-Software",
  },
  {
    title: "Library Management Software",
    link: "Library-Management-Software",
  },
  {
    title: "Real Estate Management Software",
    link: "Real-Estate-Management-Software",
  },
  {
    title: "Transport Management Software",
    link: "Transport-Management-Software",
  },
  {
    title: "Inventory Management Software",
    link: "Inventory-Management-Software",
  },
  {
    title: "Construction Management Software",
    link: "Construction-Management-Software",
  },
  { title: "Custom ERP Management Software", link: "Custom-ERP-Software" },
  { title: "Gaming App Development", link: "Gaming-App-Development" },
  {
    title: "Social Media App Development",
    link: "Social-Media-App-Development",
  },
  {
    title: "E-Commerce App Development",
    link: "E-Commerce-App-Development",
  },
  { title: "Dating App Development", link: "Dating-App-Development" },
  { title: "Fitness App Development", link: "Fitness-App-Development" },
  {
    title: "Entertainment App Development",
    link: "Entertainment-App-Development",
  },
  { title: "Finance App Development", link: "Finance-App-Development" },
  { title: "Business App Development", link: "Business-App-Development" },
];

const Products = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const getProductList = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL_DEVELOPMENT}/api/v1/product`
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
  return (
    <div
  className="container-fluid industry-services"
  style={{ background: "#ffff", height: "100vh" }}
>
  <div className="container">
    <div className="text-center">
      <h2
        style={{
          fontFamily: "'Poppins', sans-serif",
          fontWeight: "600",
          textDecoration: "none",
          paddingBottom: "5px",
          marginBottom: "15px",
          fontSize: "35px",
        }}
      >
        Our Products
      </h2>
    </div>
    <div className="row">
      {data?.map((product, index) => (
        <div className="col-md-3" key={index}>
          <div
            className="service-item"
            style={{
              background:
                "linear-gradient(102.2deg, rgb(250, 45, 66) 9.6%, rgb(245, 104, 104) 96.1%)",
              height: "25vh",
              display: "flex", // Enables flexbox for centering
              justifyContent: "center", // Horizontally centers content
              alignItems: "center", // Vertically centers content
              transition: "all 0.3s ease", // Smooth transition
            }}
          >
            <Link to={`/products/${product.slug}`} className="nav-item nav-link">
              <h4
                style={{
                  color: "white",
                  fontFamily: "'Poppins', sans-serif", // Applies Poppins font
                  fontSize: "18px", // Increases font size
                  textAlign: "center", // Ensures text is centered
                  margin: "0", // Removes any default margin
                }}
              >
                {product.name}
              </h4>
            </Link>
          </div>
        </div>
      ))}
    </div>
  </div>

  <style jsx>{`
    .service-item:hover {
      background: linear-gradient(102.2deg, rgb(245, 104, 100) 9.6%, rgb(250, 45, 66) 96.1%);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      transform: translateY(-5px); // Elevates the card slightly on hover
    }
  `}</style>
</div>

  
  );
};

export default Products;
