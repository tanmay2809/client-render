import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleProducts = () => {
  const { slug } = useParams();
  const [desc, setDesc] = useState({});
  console.log(desc);

  useEffect(() => {
    const getSingleProduct = async () => {
      if (!slug) return;
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL_DEVELOPMENT}/api/v1/product/${slug}`,
          {
            headers: {
              "Content-Type": "application/json", // Ensure JSON is sent
            },
          }
        );
        console.log("response", response);
        setDesc(response.data.data.description);
      } catch (error) {
        console.error("eerror", error);
      }
    };
    getSingleProduct();
  }, [slug]);
  return (
    <div class="container">
      <div class="row my-5">
        <div
          dangerouslySetInnerHTML={{ __html: desc }}
          style={{ textAlign: "justify" }}
        />
      </div>
    </div>
  );
};

export default SingleProducts;
