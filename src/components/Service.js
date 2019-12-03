import React from "react";

import "../assets/scss/Service.scss";

function Service() {
  return (
    <div>
      <div className="container">
        <div className="service-box">
          <div className="row">
            <div className="col-12 col-lg-6">
              <div className="service-title">
                <h2 className="service-title--h2">Berbagai Jenis Antrian</h2>
                <p className="service-title--p">
                  Jangan habiskan waktu anda hanya untuk mengantri.
                </p>
              </div>
              <div className="service-left">
                <i class="fa fa-check service-fa"></i>
                <div className="service-left-text">
                  <h5 className="service-left--h5">Layanan Kesehatan</h5>
                  <p className="service-left--p">
                    Antri di Rumah Sakit, Klinik, dan Layanan kesehatan lain
                    kini bisa lebih menyenangkan.
                  </p>
                </div>
              </div>
              <div className="service-left">
                <i class="fa fa-check service-fa "></i>
                <div className="service-left-text">
                  <h5 className="service-left--h5">Layanan Kesehatan</h5>
                  <p className="service-left--p">
                    Layanan Kesehatan Antri di Rumah Sakit, Klinik, dan Layanan
                    kesehatan lain kini bisa lebih menyenangkan.
                  </p>
                </div>
              </div>
              <div className="service-left">
                <i class="fa fa-check service-fa"></i>
                <div className="service-left-text">
                  <h5 className="service-left--h5">Berbagai Tiket Box</h5>
                  <p className="service-left--p">
                    Tidak takut lagi kehabisan Tiket atau Diskon menarik dengan
                    layanan Akuantri.
                  </p>
                </div>
              </div>
              <div className="service-left">
                <i class="fa fa-check service-fa"></i>
                <div className="service-left-text">
                  <h5 className="service-left--h5">Berbagai Restaurant</h5>
                  <p className="service-left--p">
                    Jangan lewatkan Diskon atau Opening Restaurant kesuakaan
                    Anda, Kami yang akan Antri.
                  </p>
                </div>
              </div>
              <div className="service-left">
                <i class="fa fa-check service-fa"></i>
                <div className="service-left-text">
                  <h5 className="service-left--h5">Salon atau Barbershop</h5>
                  <p className="service-left--p">
                    Kami yang akan menunggu giliran Anda di Salon atau
                    Barbershop Kesayangan Anda.
                  </p>
                </div>
              </div>
              <div className="service-left">
                <i class="fa fa-check service-fa"></i>
                <div className="service-left-text">
                  <h5 className="service-left--h5">Jenis Antrian Lain</h5>
                  <p className="service-left--p">
                    Antrian tidak masuk kategori? Ceritakan tentang jenis
                    Antrian Anda kepada kami.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="service-right">
                <img
                  src={require("../assets/images/aplikasi-akuantri-hp1.png")}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
