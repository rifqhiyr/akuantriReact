import React, { Component } from "react";

import "../assets/scss/Navbar.scss";

class Navbar extends Component {
  render() {
    return (
      <div className="nav-box">
        <div className="container">
          <div className="navigasi ">
            <nav className="navbar navbar-expand-lg  ">
              <a className="navbar-brand" href="#a">
                <img
                  className="brand-img"
                  src={require("../assets/images/akuantri-logo.png")}
                  alt=""
                />
              </a>
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarNav"
                aria-controls="navbarNav"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item navbar-li  active">
                    <a className="nav-link" href="#a">
                      Home <span className="sr-only">(current)</span>
                    </a>
                  </li>
                  <li className="nav-item navbar-li">
                    <a className="nav-link" href="#a">
                      Layanan
                    </a>
                  </li>
                  <li className="nav-item navbar-li">
                    <a className="nav-link" href="#a">
                      Faq
                    </a>
                  </li>
                  <li className="nav-item navbar-li">
                    <a className="nav-link" href="#a">
                      Blog
                    </a>
                  </li>
                  <li className="nav-item navbar-li">
                    <a className="nav-link" href="#a">
                      Tentang Kami
                    </a>
                  </li>
                </ul>
                <btn className="btn btn-header">Daftar liner</btn>
              </div>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
