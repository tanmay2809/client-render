import React from "react";
import blog1 from "../assets/img/blog-1.jpg";
import admin from "../assets/img/admin.jpg";
import { FaAngleRight } from "react-icons/fa";
import { MdFacebook } from "react-icons/md";
const BlogPost = ({ image, category, author, date, content }) => {
  return (
    <div className="col-lg-6 col-xl-4 wow fadeIn">
      <div className="blog-item position-relative bg-light rounded">
        <img src={image} className="img-fluid w-100 rounded-top" alt="" />
        <span
          className="position-absolute px-4 py-3  text-white rounded"
          style={{ top: "-28px", right: "20px",background:"gray" }}
        >
          {category}
        </span>
        <div
          className="blog-btn d-flex justify-content-between position-relative px-3"
          style={{ marginTop: "-75px" }}
        >
          <div className="blog-icon btn btn-secondary px-3 rounded-pill my-auto">
            <a href="#" className="btn text-white">
              Read More
            </a>
          </div>
          <div className="blog-icon btn btn-secondary px-3 rounded-pill my-auto">
            <a href="#" className="btn text-white">
              Share
            </a>
          </div>
          {/* <div className="blog-btn-icon btn btn-secondary px-4 py-3 rounded-pill">
            <div className="blog-icon-1">
              <p className="text-white px-2">
                Share
                <FaAngleRight className=" text-white me-2" />
              </p>
            </div>
          </div> */}
        </div>
        <div
          className="blog-content text-center position-relative px-3"
          style={{ marginTop: "-25px" }}
        >
          <img
            src={admin} // Change to your dynamic image source if needed
            height="100px"
            width="100px"
            className="img-fluid rounded-circle border border-4 border-white mb-3"
            alt=""
          />
          <h5 className="">By {author}</h5>
          <span className="text-secondary">{date}</span>
          <p className="py-2">{content}</p>
        </div>
      </div>
    </div>
  );
};
const Blog = () => {
  const blogPosts = [
    {
      image: blog1,
      category: "Web Design",
      author: "Abhishek Shahdeo",
      date: "24 March 2023",
      content:
        "Website designing is like painting a masterpiece on a digital canvas. It's all about creating visually appealing layouts that captivate visitors from the moment they land on your site.",
    },
    {
      image: blog1,
      category: "Development",
      author: "Abhishek Shahdeo",
      date: "23 April 2023",
      content:
        "When it comes to designing and developing a website, it is essential to choose the right team that understands your vision and can bring it to life.",
    },
    {
      image: blog1,
      category: "Mobile App",
      author: "Abhishek Shahdeo",
      date: "30 Jan 2023",
      content:
        "Android app development involves designing, coding, testing, and launching applications specifically for devices running on the Android operating system.",
    },
  ];

  return (
    <div className="container-fluid blog py-2 my-2">
      <div className="container py-5">
        <div
          className="text-center mx-auto pb-5 wow fadeIn"
          data-wow-delay=".3s"
          style={{ maxWidth: "600px" }}
        >
         
          <h1 style={{ fontFamily: "'Poppins', sans-serif",
                    fontWeight: "600",

                    paddingBottom: "5px",
                    marginBottom: "15px",
                    fontSize: "35px",}}>Latest Blogs & News</h1>
        </div>
        <div className="row g-5 justify-content-center">
          {blogPosts.map((post, index) => (
            <BlogPost key={index} {...post} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
