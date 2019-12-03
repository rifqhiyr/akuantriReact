import React from "react";

import "../assets/scss/Faq.scss";

function Faq() {
  return (
    <div className="faq">
      <div className="container">
        <div className="faq-box">
          <div className="faq-tittle">
            <h2 className="faq-tittle--h2">Frequently Asked Question</h2>
            <h4 className="faq-tittle--h4">
              Pertanyaan yang Sering ditanyakan Tentang Akuantri.
            </h4>
          </div>
          <div className="row">
            <div className="col-12 col-lg-6 col-md-6">
              <div className="faq-left">
                <div className="accordion" id="accordionExample">
                  <div className="card">
                    <div className="card-header" id="headingOne">
                      <h2 className="mb-0">
                        <button
                          className="btn btn-link"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          Apa & Siapa Itu Liner Akuantri?
                        </button>
                      </h2>
                    </div>

                    <div
                      id="collapseOne"
                      className="collapse show"
                      aria-labelledby="headingOne"
                      data-parent="#accordionExample"
                    >
                      <div className="card-body">
                        Setelah Anda berhasil melakukan Pesanan Antrian maka
                        Anda akan menerima Email yang menjelaskan bagaimana cara
                        pembayaran dan jumlah yang harus dibayar sesuai dengan
                        estimasi Antrian yang Anda pesan. Jika waktu Antrian
                        melebihi estimasi Antrian yang Anda pesan, maka akan
                        berlaku tarif dasar dan pembayaran dilakukan secara
                        langsung kepada Liner yang bertugas.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingTwo">
                      <h2 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          Jasa apa saja yang diberikan Akuantri?
                        </button>
                      </h2>
                    </div>
                    <div
                      id="collapseTwo"
                      className="collapse"
                      aria-labelledby="headingTwo"
                      data-parent="#accordionExample"
                    >
                      <div className="card-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. 3 wolf moon
                        officia aute, non cupidatat skateboard dolor brunch.
                        Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                        wolf moon tempor, sunt aliqua put a bird on it squid
                        single-origin coffee nulla assumenda shoreditch et.
                        Nihil anim keffiyeh helvetica, craft beer labore wes
                        anderson cred nesciunt sapiente ea proident. Ad vegan
                        excepteur butcher vice lomo. Leggings occaecat craft
                        beer farm-to-table, raw denim aesthetic synth nesciunt
                        you probably haven't heard of them accusamus labore
                        sustainable VHS.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingThree">
                      <h2 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          Bagaimana Pemesanan Liner Akuantri?
                        </button>
                      </h2>
                    </div>
                    <div
                      id="collapseThree"
                      className="collapse"
                      aria-labelledby="headingThree"
                      data-parent="#accordionExample"
                    >
                      <div className="card-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high
                        life accusamus terry richardson ad squid. 3 wolf moon
                        officia aute, non cupidatat skateboard dolor brunch.
                        Food truck quinoa nesciunt laborum eiusmod. Brunch 3
                        wolf moon tempor, sunt aliqua put a bird on it squid
                        single-origin coffee nulla assumenda shoreditch et.
                        Nihil anim keffiyeh helvetica, craft beer labore wes
                        anderson cred nesciunt sapiente ea proident. Ad vegan
                        excepteur butcher vice lomo. Leggings occaecat craft
                        beer farm-to-table, raw denim aesthetic synth nesciunt
                        you probably haven't heard of them accusamus labore
                        sustainable VHS.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 col-md-6">
              <div className="faq-right">
                <div className="accordion" id="accordionExample">
                  <div className="card">
                    <div className="card-header" id="headingOne">
                      <h2 className="mb-0">
                        <button
                          className="btn btn-link"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseOne"
                          aria-expanded="true"
                          aria-controls="collapseOne"
                        >
                          Bagaimana Cara membayar layanan Akuantri?
                        </button>
                      </h2>
                    </div>

                    <div
                      id="collapseOne"
                      className="collapse show"
                      aria-labelledby="headingOne"
                      data-parent="#accordionExample"
                    >
                      <div className="card-body">
                        Setelah Anda berhasil melakukan Pesanan Antrian maka
                        Anda akan menerima Email yang menjelaskan bagaimana cara
                        pembayaran dan jumlah yang harus dibayar sesuai dengan
                        estimasi Antrian yang Anda pesan. Jika waktu Antrian
                        melebihi estimasi Antrian yang Anda pesan, maka akan
                        berlaku tarif dasar dan pembayaran dilakukan secara
                        langsung kepada Liner yang bertugas.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingTwo">
                      <h2 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseTwo"
                          aria-expanded="false"
                          aria-controls="collapseTwo"
                        >
                          Berapa tarif dasar layanan Akuantri?
                        </button>
                      </h2>
                    </div>
                    <div
                      id="collapseTwo"
                      className="collapse"
                      aria-labelledby="headingTwo"
                      data-parent="#accordionExample"
                    >
                      <div className="card-body">
                        Setelah Anda berhasil melakukan Pesanan Antrian maka
                        Anda akan menerima Email yang menjelaskan bagaimana cara
                        pembayaran dan jumlah yang harus dibayar sesuai dengan
                        estimasi Antrian yang Anda pesan. Jika waktu Antrian
                        melebihi estimasi Antrian yang Anda pesan, maka akan
                        berlaku tarif dasar dan pembayaran dilakukan secara
                        langsung kepada Liner yang bertugas.
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="card-header" id="headingThree">
                      <h2 className="mb-0">
                        <button
                          className="btn btn-link collapsed"
                          type="button"
                          data-toggle="collapse"
                          data-target="#collapseThree"
                          aria-expanded="false"
                          aria-controls="collapseThree"
                        >
                          Berapa jumlah Liner yg dapat dipesan?
                        </button>
                      </h2>
                    </div>
                    <div
                      id="collapseThree"
                      className="collapse"
                      aria-labelledby="headingThree"
                      data-parent="#accordionExample"
                    >
                      <div className="card-body">
                        Setelah Anda berhasil melakukan Pesanan Antrian maka
                        Anda akan menerima Email yang menjelaskan bagaimana cara
                        pembayaran dan jumlah yang harus dibayar sesuai dengan
                        estimasi Antrian yang Anda pesan. Jika waktu Antrian
                        melebihi estimasi Antrian yang Anda pesan, maka akan
                        berlaku tarif dasar dan pembayaran dilakukan secara
                        langsung kepada Liner yang bertugas.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faq;
