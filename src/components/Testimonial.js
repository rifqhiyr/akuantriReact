import React from "react";

import "../assets/scss/Testimonial.scss";

function Testimonial() {
  return (
    <div className="container">
      <div className="testi-box">
        <div className="testi-title">
          <h2 className="testi-title--h2">Testimonial</h2>
          <h4 className="testi-title--h4">
            Mereka yang telah menghemat waktunya untuk mengantri
          </h4>
        </div>
        <div className="row">
          <div className="col-12 col-md-4 col-lg-4">
            <div className="testi-pict">
              <img
                className="testi-img"
                src={require("../assets/images/testi-akuantri-1.png")}
                alt=""
              />
            </div>
          </div>
          <div className="col-12 col-md-4 col-lg-4">
            <div className="testi-pict">
              <img
                className="testi-img"
                src={require("../assets/images/testi-akuantri-3.png")}
                alt=""
              />
            </div>
          </div>
          <div className="col-12 col-md-4 col-lg-4">
            <div className="testi-pict">
              <img
                className="testi-img"
                src={require("../assets/images/testi-akuantri-2.png")}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
