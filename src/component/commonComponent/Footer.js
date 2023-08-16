import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="footer__logo">
              <img src="/logo/logo-light.png" alt="" />
            </div>
            <p className="footer__tagline">
              We are many variations of passages of orem psum available but the
              majority have suffered alteration in some form by injected humour
              randomised words which look even.
            </p>

            <div className="footer__lang">
              <a
                className="footer__lang-btn"
                href="#"
                role="button"
                id="dropdownLang"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <img src="/flags/uk.svg" alt="" />
                <span>English</span>
              </a>

              <ul
                className="dropdown-menu footer__lang-dropdown"
                aria-labelledby="dropdownLang"
              >
                <li>
                  <a href="#">
                    <img src="/flags/uk.svg" alt="" />
                    <span>English</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="/flags/spain.svg" alt="" />
                    <span>Spanish</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="/flags/russia.svg" alt="" />
                    <span>Russian</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src="/flags/china.svg" alt="" />
                    <span>Chinese</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-md-2">
            <h6 className="footer__title">Netland</h6>
            <div className="footer__nav">
              <a href="#">Activity</a>
              <a href="#">About Us</a>
              <a href="#">Wallet Connect</a>
              <a href="#">Terms & Conditions</a>
              <a href="#">Privacy Policy</a>
            </div>
          </div>

          <div className="col-md-2">
            <h6 className="footer__title">Explore</h6>
            <div className="footer__nav">
              <a href="#">Music</a>
              <a href="#">Games</a>
              <a href="#">Artwork</a>
              <a href="#">Photography</a>
              <a href="#">Domains</a>
            </div>
          </div>
          <div className="col-md-2">
            <h6 className="footer__title">Community</h6>
            <div className="footer__nav">
              <a href="#">Faq</a>
              <a href="#">Our Blog</a>
              <a href="#">Help Center</a>
              <a href="#">Contact</a>
              <a href="#">Authors</a>
            </div>
          </div>
          <div className="col-md-3">
            <h6 className="footer__title">Newsletter</h6>
            <div className="footer-newsletter">
              <p>
                Subscribe our newsletter to get more update & join to netland.
              </p>
              <form action="#">
                <input type="email" placeholder="Enter your email" />
                <button type="submit">
                  <i className="far fa-paper-plane"></i> Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="footer__content">
              <div className="footer__social">
                <a href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="#">
                  <i className="fab fa-instagram"></i>
                </a>
                <a href="#">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="#">
                  <i className="fab fa-vk"></i>
                </a>
                <a href="#">
                  <i className="fab fa-pinterest"></i>
                </a>
              </div>

              <small className="footer__copyright">
                © Copyright <span id="date"></span> <a href="#">Netland</a>
                All Rights Reserved.
              </small>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
