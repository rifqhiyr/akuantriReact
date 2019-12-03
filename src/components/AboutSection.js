import React from "react";

import "../assets/scss/AboutSection.scss";

function AboutSection() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-10 col-lg-10 offset-md-1">
            <div className="about-content">
              <p className="about-content-text">
                <span className="about-content--span">Akuantri</span> tumbuh
                pada 4 Mei 2017 ditengah masyarakat sebagai Platform yang
                menyediakan berbagai Layanan On Demand yang akan mengantikan
                posisi antrean Anda dengan mitra{" "}
                <span className="about-content--span">Akuantri</span> yang kami
                sebut dengan <span className="about-content--span">Liner</span>.
                Dengan berbagai jenis solusi antrean yang ada saat ini, kami
                berharap tidak ada lagi waktu yang terbuang hanya untuk antre.
                Anda dapat melakukan hal lain yang lebih penting sementara
                antrean Anda akan tetap berjalan.{" "}
                <span className="about-content--span">Akuantri</span> akan terus
                berkembang untuk memberikan layanan prima dan solusi yang
                bernilai tambah kepada masyarakat untuk kebutuhan lain dengan
                semangat Inovasi untuk Indonesia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutSection;
