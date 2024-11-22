import React, { useEffect, useState } from "react";
import "./career.css"; // Assuming you have a separate CSS file for styling
import bgImage from "../assets/img/carrerbc.png";
import { Modal } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
const Career = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // State management for form inputs
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobileno: "",
    jobtitle: "",
    description: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, email, mobileno, jobtitle, description } = formData;
    if (
      name !== "" &&
      email !== "" &&
      mobileno !== "" &&
      jobtitle !== "" &&
      description !== ""
    ) {
      try {
        const response = await axios.post(
          `${import.meta.env.VITE_BASE_URL_DEVELOPMENT}/api/v1/job`,
          {
            name,
            email,
            mobileno,
            jobtitle,
            description,
          }
        );
        console.log(response);
        toast.success("Your Details Send Successfully.");
        // Reset form
        setFormData({
          name: "",
          email: "",
          mobileno: "",
          jobtitle: "",
          description: "",
        });
      } catch (err) {
        console.error("Error: ", err.message);
      }
      handleClose();
    } else {
      toast.error("All filed is required");
    }
    try {
    } catch (err) {
      console.log(err);
    }
  };
  const [data, setData] = useState({});
  console.log("about data", data);
  useEffect(() => {
    const fetchAbout = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL_DEVELOPMENT}/api/v1/career`
        );
        const aboutData = response?.data?.data[0];
        // const aboutData = response;
        console.log("aboug data", aboutData);
        if (aboutData) {
          setData(aboutData);
        }
      } catch (err) {
        console.error("Error fetching About: ", err);
      }
    };
    fetchAbout();
  }, []);
  const [dataList, setDataList] = useState([]);
  const [loading, setLoading] = useState(true);
  const getJobList = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${import.meta.env.VITE_BASE_URL_DEVELOPMENT}/api/v1/jobPost`
      );
      setDataList(response.data?.data || []);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching job data:", error);
      toast.error("Failed to fetch job list.");
      setLoading(false);
    }
  };

  useEffect(() => {
    getJobList();
  }, []);
  return (
    <>
      <div className="bg" style={{ backgroundImage: bgImage }}>
        <div className="container">
          <div className="content">
            <h2  style={{ fontFamily: "'Poppins', sans-serif",
          fontWeight: "600",
          textDecoration: "none",
          paddingBottom: "5px",
          marginBottom: "15px",
          fontSize: "35px",}}>{data?.name}</h2>
            {/* <div
              dangerouslySetInnerHTML={{ __html: data?.description }}
              style={{ textAlign: "justify" ,fontSize:"12px", }}
            />
            <div> 2. Selection is done only on merit.</div>
          </div>
        </div> */}
         <div style={{ fontFamily: "'Arial', sans-serif", lineHeight: "1.6" }}>
      {/* Main Content Section */}
      <div style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}>
        {/* Introduction */}
        <p style={{ marginBottom: "20px", fontSize: "18px", textAlign: "justify" }}>
          Very few seats are available. Apply soon as per opening mentioned below. Kindly read the details carefully
          before applying. All openings are based on Physical Interview and Technical Test.
        </p>

        {/* Documents Section */}
        <p style={{ fontSize: "14px", fontWeight: "bold", marginBottom: "16px" }}>
          Do come with your well-prepared following documents:
        </p>
        <ul style={{ fontSize: "12px", paddingLeft: "20px", marginBottom: "20px" }}>
          <li>1. CV</li>
          <li>2. PP size Photographs</li>
          <li>3. Aadhar or Pan Card</li>
          <li>4. Original & Xerox copy of Educational certificate</li>
        </ul>

        {/* Warning Section */}
        <p style={{ color: "red", fontSize: "14px", fontStyle: "italic", marginBottom: "30px" }}>
          Without proper documents, you will be disqualified automatically.
        </p>

        {/* Notes Section */}
        <p style={{ fontSize: "18px", fontWeight: "bold", color: "red", marginBottom: "10px" }}>Note:</p>
        <ul style={{ fontSize: "12px", paddingLeft: "20px" }}>
          <li>
            1. Brightcode Software Services Pvt. Ltd. don't accept any payment for any appointment directly or
            indirectly through any agent. So be careful and only you will be responsible for any misleading promises.
          </li>
          <li>2. Selection is done only on merit.</li>
        </ul>
      </div>
    </div>
        </div>
        </div>
      </div>
      <div className="container mt-4">
        <div className="row">
          {dataList.map((item, index) => {
            return (
              <div className="col-md-6">
                <div className="card mb-4">
                  <div className="card-body">
                    <h4 className="card-title" style={{fontSize:"18px"}} >Apply For {item.degination}</h4>
                    <table className="table">
                      <tbody>
                        <tr>
                          <td>
                            <strong>Requirement:</strong>
                          </td>
                          <td>{item.degination}</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Number of Position:</strong>
                          </td>
                          <td>{item.pepol}</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Qualification:</strong>
                          </td>
                          <td>{item.qualification}</td>
                        </tr>
                        <tr>
                          <td>
                            <strong>Job Description:</strong>
                          </td>
                          <td>
                            <p>{item.description}</p>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    <button
                      style={{
                        backgroundColor: "red",
                        color: "white",
                        borderRadius: "5px",
                        border: "none",
                        padding: "10px 10px",
                      }}
                      data-toggle="modal"
                      data-target="#applyFormModal"
                      onClick={handleShow}
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            );
          })}

          {/* Open Positions Column */}
          {/* <div className="col-md-6">
            <div className="card mb-4">
              <div className="card-body">
                <h3 className="card-title">Open Positions</h3>
                <table className="table">
                  <tbody>
                    <tr>
                      <td>HR</td>
                      <td>
                        <span className="badge badge-success">Open</span>
                      </td>
                    </tr>
                    <tr>
                      <td>Sales Co-ordinator</td>
                      <td>
                        <span className="badge badge-success">Open</span>
                      </td>
                    </tr>
                    <tr>
                      <td>Marketing Executive</td>
                      <td>
                        <span className="badge badge-success">Open</span>
                      </td>
                    </tr>
                    <tr>
                      <td>Accountant</td>
                      <td>
                        <span className="badge badge-success">Open</span>
                      </td>
                    </tr>
                    <tr>
                      <td>JAVA Developer</td>
                      <td>
                        <span className="badge badge-success">Open</span>
                      </td>
                    </tr>
                    <tr>
                      <td>.Net Developer</td>
                      <td>
                        <span className="badge badge-success">Open</span>
                      </td>
                    </tr>
                    <tr>
                      <td>PHP Developer</td>
                      <td>
                        <span className="badge badge-success">Open (2)</span>
                      </td>
                    </tr>
                    <tr>
                      <td>Android Developer</td>
                      <td>
                        <span className="badge badge-success">Open (1)</span>
                      </td>
                    </tr>
                    <tr>
                      <td>Frontend Developer</td>
                      <td>
                        <span className="badge badge-success">Open</span>
                      </td>
                    </tr>
                    <tr>
                      <td>Software Tester</td>
                      <td>
                        <span className="badge badge-success">Open</span>
                      </td>
                    </tr>
                    <tr>
                      <td>Telecaller</td>
                      <td>
                        <span className="badge badge-success">Open</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div> */}
        </div>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton={handleClose}>
            <h5 className="modal-title" id="" style={{ color: "red" }}>
              Apply For Required Post
            </h5>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={handleSubmit}>
              <div className="form-group mb-2">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group mb-2">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group mb-2">
                <label htmlFor="mobileno">Mobile No</label>
                <input
                  type="text"
                  className="form-control"
                  id="mobileno"
                  name="mobileno"
                  value={formData.mobileno}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group mb-2">
                <label htmlFor="jobtitle">Job Title</label>
                <select
                  className="form-control"
                  id="jobtitle"
                  name="jobtitle"
                  value={formData.jobtitle}
                  onChange={handleChange}
                >
                  <option value="">Select Job Title</option>
                  <option value="software-engineer">Software Engineer</option>
                  <option value="data-scientist">Data Scientist</option>
                  <option value="product-manager">Product Manager</option>
                  <option value="designer">Designer</option>
                  <option value="marketing-specialist">
                    Marketing Specialist
                  </option>
                  {/* Add more options as needed */}
                </select>
              </div>
              <div className="form-group mb-2">
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  className="form-control"
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                />
              </div>
              <br />
              <button type="submit" className="btn btn-success">
                Send to HR
              </button>
            </form>
          </Modal.Body>
        </Modal>
      </div>

      <ToastContainer />
    </>
  );
};

export default Career;
