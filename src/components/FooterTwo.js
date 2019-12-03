import React, { Component } from "react";

import "../assets/scss/FooterTwo.scss";

export default class FooterTwo extends Component {
  render() {
    return (
      <div>
        <footer className="site-footer">
          <div className="bottom-footer">
            <div className="blog-wrapper">
              <div className="footer-copyright">
                © 2019
                <a className="link" href="http://akuantri.com/blog">
                  Blog akuantri
                </a>
                .All Rights Reserved
                <a className="link" href="http://akuantri.com/blog">
                  Rara readable by Rara Theme.
                </a>
                Powered by
                <a className="link" href="http://akuantri.com/blog">
                  WordPress
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
