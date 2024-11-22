import React from "react";

const WorkProcess = () => {
  return (
    <div className="container-fluid work-process">
      <div className="container">
        <div className="row align-items-stretch">
          <div className="col-md-4 d-flex justify-content-center">
            <div className="card card-red text-center p-4 w-100">
              <h4 style={{ color: "white" }}>8+ Years of Excellence</h4>
              <p>
                We are dedicated to achieving results and surpassing clients'
                expectations. The joy and satisfaction of our clients are our
                driving force, pushing us to strive further.
              </p>
            </div>
          </div>
          <div className="col-md-4 d-flex justify-content-center">
            <div className="card card-white text-center p-4 w-100">
              <div className="circle">
                <h4 style={{ color: "white" }}>Our Work Process</h4>
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex justify-content-center">
            <div className="card card-red text-center p-4 w-100">
              <h4 style={{ color: "white" }}>
                Select the Engagement Timeline for Your Project
              </h4>
              <p>
                Through careful planning and a strategic approach, we guarantee
                the seamless assignment of the ideal development team to
                implement the expert consultations we provide.
              </p>
            </div>
          </div>
        </div>
        <div className="row mt-4 align-items-stretch">
          <div className="col-md-4 d-flex justify-content-center">
            <div className="card card-white text-center p-4 w-100">
              <h4 style={{ color: "red" }}>Swift and Innovative</h4>
              <p>
                Delivering state-of-the-art solutions with a dedication to
                excellence, we ensure prompt and impactful results for your
                business.
              </p>
            </div>
          </div>
          <div className="col-md-4 d-flex justify-content-center">
            <div className="card card-red text-center p-4 w-100">
              <h4 style={{ color: "white" }}>
                Direct Contact with Experts for Project Discussion
              </h4>
              <p>
                To avoid confusion and frequent queries during the project
                design phase, we allow our clients to interact directly with our
                developers and engage in detailed discussions about their
                projects.
              </p>
            </div>
          </div>
          <div className="col-md-4 d-flex justify-content-center">
            <div className="card card-white text-center p-4 w-100">
              <h4 style={{ color: "red" }}>On-Time Project Delivery</h4>
              <p>
                Our software development team has an elemental habit of
                executing projects before the deadline. Therefore, you can
                expect 100% on-time delivery of your project, fulfilling all
                requirements.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkProcess;
