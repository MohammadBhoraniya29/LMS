import React, { useState } from "react";

import Navbar from "../client/layout/Navbar";
import Breadcrumb from "../client/course/Breadcrumb";
import Sidebar from "./layout/Sidebar";

const StudentProfile = () => {
  const [imageSrc, setImageSrc] = useState("https://via.placeholder.com/150");
  const [fileName, setFileName] = useState("");

  const handleButtonClick = () => {
    document.getElementById("fileInput").click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
      const reader = new FileReader();
      reader.onload = () => {
        setImageSrc(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <Navbar />
      <Breadcrumb />
      <div className="main_stu_dashboard">
        <Sidebar />
        <div className="main static p-0 md:ml-20 ml-[75px] lg:ml-8 md:w-full w-80">
          <h2
            className="font-bold text-3xl sticky top-0 left-0 bg-white z-10 text-black pb-3"
            style={{ fontFamily: "Inter, serif" }}
          >
            Profile
          </h2>
          <div className="course-form-container shadow-none rounded-none border-[1px] lg:p-5 md:p-5 p-2">
            <form>
              {/* first / middle / last  name */}
              <div className="flex-row lg:flex md:flex block gap-3 mb-4">
                <div className="form-group mb-0 lg:w-1/3 md:w-1/3 w-full lg:pb-0 md:pb-0 pb-2">
                  <label>
                    First Name<span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter First Name"
                    className="col12input"
                  />
                </div>

                <div className="form-group mb-0 lg:w-1/3 md:w-1/3 w-full lg:pb-0 md:pb-0 pb-2">
                  <label>Middle Name</label>
                  <input
                    type="text"
                    placeholder="Enter Middle Name"
                    className="col12input"
                  />
                </div>

                <div className="form-group mb-0 lg:w-1/3 md:w-1/3 w-full lg:pb-0 md:pb-0 pb-2">
                  <label>
                    Last Name<span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter Last Name"
                    className="col12input"
                  />
                </div>
              </div>

              {/* email / password */}
              <div className="flex-row lg:flex md:flex block gap-3 mb-4" style={{ gap: "15px" }}>
                <div className="form-group mb-0 lg:w-1/3 md:w-1/3 w-full lg:pb-0 md:pb-0 pb-2">
                  <label>
                    Email<span className="required">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    className="col12input"
                  />
                </div>

                <div className="form-group mb-0 lg:w-1/4 md:w-1/4 w-full lg:pb-0 md:pb-0 pb-2">
                  <label>
                    Contact Number<span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="9876543210"
                    className="col12input"
                  />
                </div>
                <div className="chekbox flex form-group mb-0 lg:w-1/6 md:w-1/6 w-full lg:pb-0 md:pb-0 pb-2">
                  <input type="checkbox" />
                  <label>Same WhatsApp</label>
                </div>

                <div className="form-group mb-0 lg:w-1/4 md:w-1/4 w-full lg:pb-0 md:pb-0 pb-2">
                  <label>
                    WhatsApp
                    <label>
                      <span className="required">*</span>
                    </label>
                  </label>
                  <input
                    type="text"
                    placeholder="9876543210"
                    className="col12input"
                  />
                </div>
              </div>

              {/* address / country */}
              <div className="flex-row lg:flex md:flex block gap-3 mb-4">
                <div className="form-group mb-0 lg:w-3/6 md:w-3/6 w-full lg:pb-0 md:pb-0 pb-2">
                  <label>Address</label>
                  <input
                    type="text"
                    placeholder="Address"
                    className="col12input"
                  />
                </div>

                <div className="form-group mb-0 lg:w-3/6 md:w-3/6 w-full lg:pb-0 md:pb-0 pb-2">
                  <label>Country</label>
                  <input
                    type="text"
                    placeholder="Country"
                    className="col12input"
                  />
                </div>
              </div>

              {/* gender / DOB / profile image */}
              <div className="lg:flex md:flex block">
                <div className="flex-row lg:flex md:flex block gap-3 mb-4 lg:w-6/12 md:w-6/12 w-full lg:pb-0 md:pb-0 pb-2">
                  <div className="form-group mb-0 lg:w-3/6 md:w-3/6 w-full lg:pb-0 md:pb-0 pb-2">
                    <label>Gender</label>
                    <select className="col12input">
                      <option value="upcoming">Male</option>
                      <option value="upcoming">Female</option>
                      <option value="upcoming">Other</option>
                    </select>
                  </div>

                  <div className="form-group mb-0 lg:w-3/6 md:w-3/6 w-full lg:pb-0 md:pb-0 pb-2">
                    <label>DOB</label>
                    <input
                      type="date"
                      placeholder="Enter Course Title"
                      className="col12input"
                    />
                  </div>
                </div>

                <div
                  className="flex-row lg:w-3/6 md:w-3/6 w-full border-0 lg:ml-8 md:ml-8 0"
                  style={{
                    alignItems: "end",
                    gap: "10px",
                    justifyContent: "normal",
                  }}
                >
                  <div className="form-group mb-0" style={{ width: "50%" }}>
                    <label>
                      Profile Picture <span className="required">*</span>
                    </label>
                    <input
                      type="text"
                      placeholder=""
                      className="col12input"
                      value={fileName}
                      readOnly
                    />
                  </div>

                  <button
                    className="primary-btn module-btn"
                    type="button"
                    onClick={handleButtonClick}
                  >
                    Browse
                  </button>

                  <input
                    id="fileInput"
                    type="file"
                    style={{ display: "none" }}
                    accept="image/*"
                    onChange={handleFileChange}
                  />

                  <div>
                    <img
                      src={imageSrc}
                      style={{ width: "67px", maxHeight: "67px" }}
                      alt="Selected Thumbnail"
                    />
                  </div>
                </div>
              </div>

              {/* user about details */}
              <div
                className="flex-row"
                style={{ border: "none", padding: " 0" }}
              >
                <div className="form-group mb-0" style={{ width: "100%" }}>
                  <label>About User</label>
                  <textarea
                    type="text"
                    placeholder="Enter Your About Details"
                    className="col12input"
                  />
                </div>
              </div>

              <div className="lg:w-4/12 md:w-4/12 w-full">
                <label>Old Password</label>
                <input
                  type="password"
                  placeholder="Old Password"
                  className="col12input"
                />
              </div>

              {/* new Password  */}

              <div
                className="flex-row lg:flex md:flex block gap-5 lg:w-8/12 md:w-8/12 w-full lg:pb-0 md:pb-0 pb-2"
                style={{ border: "none", padding: "20px 0 0 0" }}
              >
                <div className="lg:w-6/12 md:w-6/12 w-full">
                  <label>New Password</label>
                  <input
                    type="password"
                    placeholder="New Password"
                    className="col12input"
                  />
                </div>

                <div className="lg:w-6/12 md:w-6/12 w-full">
                  <label>Confirm Password</label>
                  <input
                    type="password"
                    placeholder="Confirm Password"
                    className="col12input"
                  />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentProfile;
