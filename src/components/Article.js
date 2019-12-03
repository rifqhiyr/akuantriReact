import React from "react";

import "../assets/scss/Article.scss";

function Article() {
  return (
    <div className="article">
      <div className="article-wrapper">
        {/* <div className="container"> */}
        <figure className="figure">
          <img
            src={require("../assets/images/2-1.jpg")}
            className="figure-img img-fluid rounded article-img"
            alt="..."
          />
        </figure>
        <div className="article-content">
          <header className="article-header">
            <h2 className="article-h2">
              Awal Terbentuknya Teori Antrian di Dunia
            </h2>
            <div className="meta-wrapper">
              <div className="article-meta">
                <i class="fa fa-th-large"></i>
                <span className="category">categories:</span>
                <a className="category-link" href="#a">
                  berita
                </a>
              </div>
              <div className="article-meta">
                <i class="fa fa-calendar"></i>
                <span className="category">updated on:</span>
                <a className="category-link" href="#a">
                  21 April 2018
                </a>
              </div>
              <div className="article-meta">
                <i class="fa fa-user-circle"></i>
                <span className="category">Akuantri</span>
                <a className="category-link" href="#a">
                  berita
                </a>
              </div>
            </div>
          </header>
          <div className="article-p">
            <p>
              Teori antrian pertama kali dikemukakan oleh A.K. Erlang, seorang
              ahli matematika bangsa Denmark tahun 1913 dalam bukunya Solution
              of Some Problem in the Theory of Probability …
            </p>
          </div>
          <footer className="article-footer">
            <button className="footer-btn">selengkapnya</button>
          </footer>
        </div>
      </div>
      <div className="article-wrapper">
        {/* <div className="container"> */}
        <figure className="figure">
          <img
            src={require("../assets/images/2 (1).jpg")}
            className="figure-img img-fluid rounded article-img"
            alt="..."
          />
        </figure>
        <div className="article-content">
          <header className="article-header">
            <h2 className="article-h2">Cathay Pacific Travel Fair</h2>
            <div className="meta-wrapper">
              <div className="article-meta">
                <i class="fa fa-th-large"></i>
                <span className="category">categories:</span>
                <a className="category-link" href="#a">
                  berita
                </a>
              </div>
              <div className="article-meta">
                <i class="fa fa-calendar"></i>
                <span className="category">updated on:</span>
                <a className="category-link" href="#a">
                  21 April 2018
                </a>
              </div>
              <div className="article-meta">
                <i class="fa fa-user-circle"></i>
                <span className="category">Akuantri</span>
                <a className="category-link" href="#a">
                  berita
                </a>
              </div>
            </div>
          </header>
          <div className="article-p">
            <p>
              Di Indonesia kebutuhan akan liburan sangatlah tinggi, itu terbukti
              dari antusias masyarakat yang mengantri di event Chatay Pacific
              Trafel Fair yang digelar HSBC di Mall …
            </p>
          </div>
          <footer className="article-footer">
            <button className="footer-btn">selengkapnya</button>
          </footer>
        </div>
      </div>
      <div className="article-wrapper">
        {/* <div className="container"> */}
        <figure className="figure">
          <img
            src={require("../assets/images/2.jpg")}
            className="figure-img img-fluid rounded article-img"
            alt="..."
          />
        </figure>
        <div className="article-content">
          <header className="article-header">
            <h2 className="article-h2">BCA Singapore Travel Fair 2017</h2>
            <div className="meta-wrapper">
              <div className="article-meta">
                <i class="fa fa-th-large"></i>
                <span className="category">categories:</span>
                <a className="category-link" href="#a">
                  berita
                </a>
              </div>
              <div className="article-meta">
                <i class="fa fa-calendar"></i>
                <span className="category">updated on:</span>
                <a className="category-link" href="#a">
                  21 April 2018
                </a>
              </div>
              <div className="article-meta">
                <i class="fa fa-user-circle"></i>
                <span className="category">Akuantri</span>
                <a className="category-link" href="#a">
                  berita
                </a>
              </div>
            </div>
          </header>
          <div className="article-p">
            <p>
              Sudah tidak bisa dipungkiri ditengah sibuknya aktifitas sehari
              hari membuat sebagian orang merasa jenuh sehingga butuh sesuatu
              yang dapat memulihkan kembali stamina yang sudah terkuras, …
            </p>
          </div>
          <footer className="article-footer">
            <button className="footer-btn">selengkapnya</button>
          </footer>
        </div>
      </div>
    </div>
    // </div>
  );
}

export default Article;
