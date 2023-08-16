import React, { useState } from "react";
import Header from "../component/commonComponent/Header";
import BgTitle from "../component/commonComponent/BgTitle";
import Footer from "../component/commonComponent/Footer";
import { setInputState } from "../utils/helper";
import { Link } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Signup = () => {
  const [signUpData, setSignUpData] = useState({});

  const handleSignup = () => {
    axios
      .post(
        `${process.env.REACT_APP_BACKEND_BASE_URL}/auth/register`,
        signUpData
      )
      .then((response) => {
        console.log(response);
        toast.success(response.data.message);
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data.message);
      });
  };
  return (
    <div>
      <Header />
      <BgTitle title={"Sign Up"} />
      <div className="signin-area pt-70 pb-70">
        <div class="container">
          <div class="row row--grid">
            <div className="sign">
              <div className="sign__content">
                {/* <!-- authorization form --> */}
                <form action="#" className="sign__form">
                  <Link to="/" className="sign__logo">
                    <img src="/logo/logo.png" alt="" />
                  </Link>

                  <div className="sign__group">
                    <input
                      type="text"
                      className="sign__input"
                      placeholder="Name"
                      name="name"
                      onChange={(e) => setInputState(setSignUpData, e)}
                    />
                  </div>
                  <div className="sign__group">
                    <input
                      type="text"
                      className="sign__input"
                      placeholder="Secret Code"
                      name="secretCode"
                      onChange={(e) => setInputState(setSignUpData, e)}
                    />
                  </div>
                  <div className="sign__group">
                    <input
                      type="text"
                      className="sign__input"
                      placeholder="Email"
                      name="email"
                      onChange={(e) => setInputState(setSignUpData, e)}
                    />
                  </div>

                  <div className="sign__group">
                    <input
                      type="password"
                      className="sign__input"
                      placeholder="Password"
                      name="password"
                      onChange={(e) => setInputState(setSignUpData, e)}
                    />
                  </div>

                  <button
                    className="sign__btn"
                    type="button"
                    onClick={handleSignup}
                  >
                    Setup Account
                  </button>

                  <span className="sign__text">
                    Already have an account? <Link to="/signin">Sign in!</Link>
                  </span>
                </form>
                {/* <!-- end authorization form -->` */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Signup;
