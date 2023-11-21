import {BsPatchCheckFill} from "react-icons/bs";
import React from "react";
import "./profile.css";
import imageUser from "../Images/pic.png";
import imageCover from "../Images/profileCover.jpeg";
import { FaStar, FaThumbsUp, FaEye, FaHeart, FaGem } from "react-icons/fa";

function profile() {
  return (
    <div>
      <img
        className="img-fluid" src={imageCover} alt="Cover"
        style={{ maxHeight: "300px", width: "100%", objectFit: "cover" }} />
      <div className="container">
        <div className="row">
          <img
            className="img-fluid rounded-circle border border-secondary mt-3"
            src={imageUser} alt="Profile"
            style={{ maxWidth: "100%", transform: "translate(-0%, -40%)", zIndex: 1, maxHeight: "200px", objectFit: "cover", height: "auto", width: "180px"}}/>

          <div className="col mt-3">
            <div className="font-weight-bold text-lg">
              <div className="d-flex align-items-center">
                <div className="mr-3" style={{ fontSize: "20px", fontFamily: "sans-serif" }}>
                  Raghunath Tiwari
                </div>
                <FaGem className="ml-1" style={{ color: "#452f7b" }} />
                <BsPatchCheckFill className="ml-1" style={{ color: "#60b59a" }}
                />
              </div>
            </div>

            <div className="d-flex justify-content">
              <div className="text-dark">
                <div
                  className="font-weight-bold text-lg box-txt" style={{ width: "80px" }} >
                  6482
                </div>
                <div className="text-sm txt">Followers</div>
              </div>
              <div className="text-dark" style={{ marginLeft: "25px" }}>
                <div
                  className="font-weight-bold text-lg box-txt"
                  style={{ width: "80px" }} >
                  245
                </div>
                <div className="text-sm txt">Following</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="profile-bio">
          <div className="text-lg" style={{ fontSize: "20px" }}>
            Raghunath Tiwari's Profile Page
          </div>
          <a href="https://github.com/Raghutiwarii/Terribly_Assign" style={{ fontSize: "18px" }} >
            https://github.com/Raghutiwarii/Terribly_Assign
          </a>
        </div>
        <div className="d-flex align-items-center mt-3">
          <div className="d-flex align-items-center">
            <FaStar className="ml-1" style={{ color: "#6fbad6" }} /><span className="ml-1">125</span>
          </div>
          <div className="d-flex align-items-center ml-3">
            <FaThumbsUp  style={{ color: "#ffc87c" }} /> <span className="ml-1">12</span>
          </div>
          <div className="d-flex align-items-center ml-3">
            <FaEye  style={{ color: "#6f4e1a" }} /> <span className="ml-1">57.8K</span>
          </div>
          <div className="d-flex align-items-center ml-3">
            <FaHeart  style={{ color: "#ae2029" }} /> <span className="ml-1">26.0K</span>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
}
export default profile;