import React from "react";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header__content">
          <div className="header__logo">
            <a href="index.html">
              <img src="/logo/logo-light.png" alt="" />
            </a>
          </div>

          <form action="#" className="header__search">
            <input type="text" placeholder="Search Here..." />
            <button type="button">
              <i className="far fa-search"></i>
            </button>
            <button type="button" className="close">
              <i className="far fa-times"></i>
            </button>
          </form>

          <div className="header__menu">
            <ul className="header__nav">
              <li className="header__nav-item">
                <a
                  className="header__nav-link"
                  href="#"
                  data-bs-toggle="dropdown"
                >
                  Home <i className="far fa-angle-down"></i>
                </a>

                {/* <ul className='dropdown-menu slideIn'>
                  <li>
                    <a href='index.html'>Home Style One</a>
                  </li>
                  <li>
                    <a href='index-2.html'>Home Style Two</a>
                  </li>
                  <li>
                    <a href='index-3.html'>Home Style Three</a>
                  </li>
                  <li>
                    <a href='index-4.html'>Home Style Four</a>
                  </li>
                </ul> */}
              </li>
              <li className="header__nav-item">
                <a
                  className="header__nav-link"
                  href="#"
                  data-bs-toggle="dropdown"
                >
                  Explore <i className="far fa-angle-down"></i>
                </a>

                {/* <ul className='dropdown-menu slideIn'>
                  <li>
                    <a href='explore.html'>Explore Style One</a>
                  </li>
                  <li>
                    <a href='explore-2.html'>Explore Style Two</a>
                  </li>
                  <li>
                    <a href='explore-3.html'>Explore Style Three</a>
                  </li>
                  <li>
                    <a href='explore-4.html'>Explore Style Four</a>
                  </li>
                  <li>
                    <a href='live-auction.html'>Live Auctions</a>
                  </li>
                  <li>
                    <a href='item.html'>Item Style One</a>
                  </li>
                  <li>
                    <a href='item-2.html'>Item Style Two</a>
                  </li>
                </ul> */}
              </li>
              <li className="header__nav-item">
                <a href="activity.html" className="header__nav-link">
                  Activity
                </a>
              </li>
              <li className="header__nav-item">
                <a
                  className="header__nav-link"
                  href="#"
                  data-bs-toggle="dropdown"
                >
                  Community <i className="far fa-angle-down"></i>
                </a>
                {/* <ul className='dropdown-menu slideIn'>
                  <li>
                    <a href='token.html'>Token</a>
                  </li>
                  <li>
                    <a href='help.html'>Help Center</a>
                  </li>
                  <li>
                    <a href='contact.html'>Contact</a>
                  </li>
                </ul> */}
              </li>
              <li className="header__nav-item">
                <a
                  className="header__nav-link"
                  href="#"
                  data-bs-toggle="dropdown"
                >
                  Pages <i className="far fa-angle-down"></i>
                </a>

                {/* <ul className='dropdown-menu slideIn'>
                  <li>
                    <a href='about.html'>About Us</a>
                  </li>
                  <li>
                    <a href='team.html'>Team</a>
                  </li>
                  <li>
                    <a href='authors.html'>Authors</a>
                  </li>
                  <li>
                    <a href='author-single.html'>Author Single</a>
                  </li>
                  <li>
                    <a href='wallet-connect.html'>Wallet Connect</a>
                  </li>
                  <li>
                    <a href='collection.html'>Collection</a>
                  </li>
                  <li>
                    <a href='create.html'>Create</a>
                  </li>
                  <li>
                    <a href='signin.html'>Sign In</a>
                  </li>
                  <li>
                    <a href='signup.html'>Sign Up</a>
                  </li>
                  <li>
                    <a href='forgot.html'>Forgot Password</a>
                  </li>
                  <li>
                    <a href='faq.html'>Faq</a>
                  </li>
                  <li>
                    <a href='contact.html'>Contact Us</a>
                  </li>
                  <li>
                    <a href='privacy.html'>Privacy Policy</a>
                  </li>
                  <li>
                    <a href='terms.html'>Terms & Conditions</a>
                  </li>
                  <li>
                    <a href='404.html'>404 Page</a>
                  </li>
                </ul> */}
              </li>
              <li className="header__nav-item">
                <a
                  className="header__nav-link"
                  href="#"
                  data-bs-toggle="dropdown"
                >
                  Blog<i className="far fa-angle-down"></i>
                </a>

                {/* <ul className='dropdown-menu slideIn'>
                  <li>
                    <a href='blog.html'>Blog Style One</a>
                  </li>
                  <li>
                    <a href='blog-2.html'>Blog Style Two</a>
                  </li>
                  <li>
                    <a href='blog-single.html'>Blog Details</a>
                  </li>
                </ul> */}
              </li>
            </ul>
          </div>

          <div className="header__actions">
            <div className="header__action header__action--search">
              <button className="header__action-btn" type="button">
                <i className="far fa-search"></i>
              </button>
            </div>

            <div className="header__action header__action--profile"></div>
          </div>

          <button className="header__btn" type="button">
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Header;
