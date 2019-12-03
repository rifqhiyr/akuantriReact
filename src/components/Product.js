import React from "react";

import "../assets/scss/Product.scss";

function Product() {
  return (
    <div className="product">
      <div className="container">
        <div className="product-box">
          <div className="row">
            <div className="col-12 col-md-4 col-lg-4">
              <div className="product-card">
                <div className="product-fa">
                  <i className="fa fa-calendar"></i>
                </div>
                <h3 className="product-h3">Hemat Waktu Anda</h3>
                <p className="product-p">
                  Bebaskan dan hemat waktu Anda untuk Antri, Kami yang akan
                  menggantikan posisi Antrian panjang Anda.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-4 col-lg-4">
              <div className="product-card">
                <div className="product-fa">
                  <i className="fa fa-calendar"></i>
                </div>
                <h3 className="product-h3">Pesan Antrian Kapan Saja</h3>
                <p className="product-p">
                  Silahkan pesan Antrian untuk sekarang , Besok, Minggu depan,
                  kapan Saja. Liner kami akan siap Antri untuk Anda.
                </p>
              </div>
            </div>
            <div className="col-12 col-md-4 col-lg-4">
              <div className="product-card">
                <div className="product-fa">
                  <i className="fa fa-calendar"></i>
                </div>
                <h3 className="product-h3">Berbagai Jenis Antrian</h3>
                <p className="product-p">
                  Beragam jenis Antrian tinggal pesan seperti Antri BPJS,
                  Imigrasi, Pembayaran pajak, dan Antrian lainya.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
