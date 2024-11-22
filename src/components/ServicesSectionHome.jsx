import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ServiceSectionHome = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const getProductList = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL_DEVELOPMENT}/api/v1/service`
      );
      setData(response.data?.data || []); // Ensure services have 'slug'
      setLoading(false);
    } catch (error) {
      console.error("Error fetching product data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getProductList();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mt-5">
      <h2 className="text-center text-danger">
        Symbosys services that Boost your business Online & Offline.
      </h2>
      <div className="row mt-4">
        {data.map((service, index) => (
          <div className="col-md-4 d-flex align-items-stretch" key={index}>
            <div className="card w-100">
              <img
                src={service.image}
                className="card-img-top"
                alt={service.name}
              />
              <div className="card-body">
                <h5 className="card-title">{service.name}</h5>
                <p className="card-text text-dark">{service.text}</p>
                <Link
                  to={`/services/${service.slug}`}
                  className="btn btn-warning"
                >
                  Read more →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceSectionHome;
