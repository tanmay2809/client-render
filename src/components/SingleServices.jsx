import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const SingleServices = () => {
  const { slug } = useParams();
  const [data, setData] = useState({});

  useEffect(() => {
    const getSingleProduct = async () => {
      if (!slug) return;
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL_DEVELOPMENT}/api/v1/service/${slug}`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log("response", response);
        setData(response.data.data);
      } catch (error) {
        console.error("eerror", error);
      }
    };
    getSingleProduct();
  }, [slug]);
  return (
    <div className="container">
      <div className="row mb-5">
        <center>
          <div className="div">
            <img
              src={data.image}
              style={{ height: "400px", width: "400px" }}
              className="responsive-img"
            />
          </div>
        </center>
        <div
          dangerouslySetInnerHTML={{ __html: data.description }}
          style={{ textAlign: "justify" }}
        />
      </div>
    </div>
  );
};

export default SingleServices;
