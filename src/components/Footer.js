import React from "react";

import "../assets/scss/Footer.scss";

function Footer() {
  return (
    <footer>
      <div>
        <div className="container">
          <div className="footer-box">
            <div className="row">
              <div className="col-12 col-md-4 col-lg-4">
                <div>
                  <h3 className="footer-h3">Sekilas Akuantri</h3>
                  <p>
                    Akuantri adalah Aplikasi Layaan Jasa Antri yang akan
                    menghemat waktu Anda dalam hal mengantri. Kami mempunyai
                    jenis Antrian yang beragam. dengan Akuantri Anda bisa
                    melakukan hal yang lebih penting, sementara antrian Anda
                    akan tetap berajalan.{" "}
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-4">
                <div>
                  <h3 className="footer-h3">Links</h3>
                  <ul className="footer-ul">
                    <li className="footer-li">Tentang Kami</li>
                    <li className="footer-li">Promo</li>
                    <li className="footer-li">Karir</li>
                    <li className="footer-li">Hubungi kami</li>
                    <li className="footer-li">Syarat & Ketentuan</li>
                  </ul>
                </div>
              </div>
              <div className="col-12 col-md-4 col-lg-4">
                <div>
                  <h3 className="footer-h3">Download Aplikasi</h3>
                </div>
                <div>
                  <img
                    className="footer-img"
                    src={require("../assets/images/playstore.png")}
                    alt=""
                  />
                </div>
              </div>
            </div>

            <div className="footer-bottom">
              <div className="footer-little">
                © PT Aku Antri Indonesia. All Rights Reserved.
                <br /> Jasa Layanan Antri Indonesia - Akuantri
              </div>
              <div className="footer-sosmed">
                <span className="footer-sosmed-item">
                  <i class="fa fa-twitter-square"></i>
                </span>
                <span className="footer-sosmed-item">
                  <i class="fa fa-youtube"></i>
                </span>
                <span className="footer-sosmed-item">
                  <i class="fa fa-facebook-square"></i>
                </span>
                <span className="footer-sosmed-item">
                  <i class="fa fa-instagram"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
