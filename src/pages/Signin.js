import React, { useState } from "react";
import Header from "../component/commonComponent/Header";
import BgTitle from "../component/commonComponent/BgTitle";
import Footer from "../component/commonComponent/Footer";
import { Link } from "react-router-dom";
import { setInputState } from "../utils/helper";
import axios from "axios";
import { toast } from "react-toastify";

const Signin = () => {
  const [signInData, setSignInData] = useState({});

  const handleSignin = () => {
    axios
      .post(`${process.env.REACT_APP_BACKEND_BASE_URL}/auth/login`, signInData)
      .then((response) => {
        console.log(response);
        toast.success(response.data.message);
        localStorage.setItem("token", response.data.token);
      })
      .catch((err) => {
        console.log(err);
        toast.error(err.response.data.message);
      });
  };

  return (
    <>
      <Header />
      <BgTitle title={"Sign In"} />
      <div class="signin-area pt-70 pb-70">
        <div class="container">
          <div class="row row--grid">
            <div class="sign">
              <div class="sign__content">
                {/* <!-- authorization form --> */}
                <form action="#" class="sign__form">
                  <Link to="/" class="sign__logo">
                    <img src="/logo/logo.png" alt="" />
                  </Link>

                  <div class="sign__group">
                    <input
                      type="text"
                      class="sign__input"
                      placeholder="Email"
                      name="email"
                      onChange={(e) => setInputState(setSignInData, e)}
                    />
                  </div>

                  <div class="sign__group">
                    <input
                      type="password"
                      class="sign__input"
                      placeholder="Password"
                      name="password"
                      onChange={(e) => setInputState(setSignInData, e)}
                    />
                  </div>

                  <div class="sign__group sign__group--checkbox">
                    <input
                      id="remember"
                      name="remember"
                      type="checkbox"
                      checked={signInData.remember}
                      onChange={(e) =>
                        setSignInData({
                          ...signInData,
                          remember: e.target.checked,
                        })
                      }
                    />
                    <label for="remember">Remember Me</label>
                  </div>

                  <button
                    class="sign__btn"
                    type="button"
                    onClick={handleSignin}
                  >
                    Sign in
                  </button>

                  <span class="sign__text">
                    Activite account?{" "}
                    <Link to="/signup">Admin Account Setup</Link>
                  </span>

                  <span class="sign__text">
                    <Link to="/forgotpassword">Forgot password?</Link>
                  </span>
                </form>
                {/* <!-- end authorization form --> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Signin;
