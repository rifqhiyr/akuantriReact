import React, { Component } from "react";

import "../assets/scss/Jumbotron.scss";

class Jumbotron extends Component {
  render() {
    return (
      <div className="jumbo-box">
        <div className="jumbotron jumbotron-fluid ">
          <div className="container">
            <div className="jumbo">
              <h1 className="display-4">Akuantri Indonesia</h1>
              <p className="lead">
                Kami sadar menunggu adalah hal yang membosankan, dan kami juga
                sadar akan ada banyak waktu terbuang begitu saja karna harus
                menunggu. Untuk itu, Akuantri hadir untuk membuat waktu berharga
                Anda tidak hilang begitu saja. Kami akan menggantikan antrian
                Anda, karna kami sadar bahwa Waktu Anda sangat Berharga.
              </p>
              <div className="jumbo-btn">
                <img
                  className="btn-img"
                  src={require("../assets/images/playstore.png")}
                  alt=""
                />
                <img
                  className="btn-img"
                  src={require("../assets/images/pelajari2.png")}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Jumbotron;
