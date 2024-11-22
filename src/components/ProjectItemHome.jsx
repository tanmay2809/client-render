import React from "react";
import project1 from "../assets/img/project-1.jpg";
import project2 from "../assets/img/project-2.jpg";
import project3 from "../assets/img/project-3.jpg";
const ProjectItemHome = () => {
  return (
    <div className="container-fluid project py-5 mb-5">
      <div className="container">
        <div
          className="text-center mx-auto pb-5 wow fadeIn"
          data-wow-delay=".3s"
          style={{ maxWidth: "600px" }}
        >
          <h5 className="text-primary">Our Project</h5>
          <h1>Our Recently Completed Projects</h1>
        </div>
        <div className="row g-5">
          <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".3s">
            <div className="project-item">
              <div className="project-img">
                <img
                  src={project1}
                  className="img-fluid w-100 rounded"
                  alt=""
                />
                <div className="project-content">
                  <a href="#" className="text-center">
                    <h4 className="text-secondary">Web design</h4>
                    <p className="m-0 text-dark">Urban Classes</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".5s">
            <div className="project-item">
              <div className="project-img">
                <img
                  src={project2}
                  className="img-fluid w-100 rounded"
                  alt=""
                />
                <div className="project-content">
                  <a href="#" className="text-center">
                    <h4 className="text-secondary">App Development</h4>
                    <p className="m-0 text-dark">Brightwood Academy</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 wow fadeIn" data-wow-delay=".7s">
            <div className="project-item">
              <div className="project-img">
                <img
                  src={project3}
                  className="img-fluid w-100 rounded"
                  alt=""
                />
                <div className="project-content">
                  <a href="#" className="text-center">
                    <h4 className="text-secondary">Mobile Info</h4>
                    <p className="m-0 text-dark">Upcomming Phone</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItemHome;
