import React from "react";

import "../assets/scss/HeaderTwo.scss";

function HeaderTwo() {
  return (
    <div className="header">
      <div className="header-wrapper">
        <div className="blog-header-box">
          <div className="blog-sosmed">
            <span className="blog-sosmed-item">
              <i class="fa fa-twitter-square"></i>
            </span>
            <span className="blog-sosmed-item">
              <i class="fa fa-youtube"></i>
            </span>
            <span className="blog-sosmed-item">
              <i class="fa fa-facebook-square"></i>
            </span>
            <span className="blog-sosmed-item">
              <i class="fa fa-instagram"></i>
            </span>
            <span className="blog-search blog-sosmed-item">
              <i class="fa fa-search"></i>
            </span>
          </div>
        </div>
      </div>
      <div className="blog-logo">
        <img src={require("../assets/images/blog-logo.png")} alt="" />
      </div>
    </div>
  );
}

export default HeaderTwo;
