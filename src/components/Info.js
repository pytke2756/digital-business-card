import React from "react";
import image from "../assets/photo.jpg";

const Info = () => {
  return (
    <div>
      <img className="info-img" src={image}></img>
      <div className="basic-info bck-grnd">
        <h1>Levente Ibrányi</h1>
        <h2>Fullstack Developer</h2>
        <h4>github.com/pytke2756</h4>
        <button className="email-btn">
          <i class="fa-solid fa-envelope"></i>Email
        </button>
        <button className="linkedin-btn">
          <i class="fa-brands fa-linkedin"></i>LinkedIn
        </button>
      </div>
    </div>
  );
};

export default Info;
