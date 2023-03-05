import React from "react";

import { Link } from "react-router-dom";
// import pic from './'
const Home = () => {
  return (
    <div className="myself ">
      <div
        className="box9 "
        style={{
          backgroundColor: "bisque",
        }}
      >
        <div
          style={{
            flexDirection: "row",
            justifyContent: "center",
            display: "flex",
          }}
        >
          <div
            className="box10"
            style={{ alignItems: "center", margin: "auto" }}
          >
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                style={{
                  borderRadius: "50%",
                  width: "6cm",
                  height: "6cm",
                  alignItems: "center",
                }}
                src={require("./papa.jpg")}
                alt=""
              />
            </div>
            <div style={{ textAlign: "center" }}>
              <h4 style={{ fontFamily: "sans-serif" }}>PAPU PAYENG</h4>
              <h3 style={{ fontFamily: "monospace" }}>Full Stack developer</h3>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "10px",
                }}
              >
                <a
                  href="https://www.facebook.com/justin.hazarika.1/ "
                  target="_blank"
                >
                  FACEBOOK
                </a>
                <a
                  href="https://www.instagram.com/p_payeng2001/"
                  target="_blank"
                >
                  INSTAGRAM
                </a>
                <a
                  href="https://www.linkedin.com/in/papu-payeng-5b8b8921a/"
                  target="_blank"
                >
                  LINKDEIN
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="box9" style={{ backgroundColor: "white" }}>
        <h1 style={{ fontSize: "40px" }}>HELLO</h1>
        <h3>here I am & what I do</h3>
        <div style={{ fontFamily: "sans-serif" }}>
          <button>
            {" "}
            <Link to="/skills">
              <h4>SKILLS</h4>
            </Link>
          </button>
          <button>
            {" "}
            <Link to="/experience">
              <h4>EXEPERIENCE</h4>
            </Link>
          </button>
        </div>
        <div className="paragraph">
          <p>
            I am a Student of Indian Institute of Technology,Madras .I am
            currently in third year pursuing B TEch Degree in chemical
            engineering.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;

{
  /* <img  style={{borderRadius:'40%',width:'7cm',height:'7cm'}}  src={require('./papa.jpg')} alt="" /> */
}
