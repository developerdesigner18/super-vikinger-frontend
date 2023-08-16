import React, { useState } from "react";
import Header from "../component/commonComponent/Header";
import BgTitle from "../component/commonComponent/BgTitle";
import Footer from "../component/commonComponent/Footer";
import axios from "axios";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleForgetPassword = () => {
    axios
      .post(`${process.env.REACT_APP_BACKEND_BASE_URL}/auth/forgetPassword`, {
        email,
      })
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
      <BgTitle title={"Forgot Password"} />
      <div class="signin-area pt-70 pb-70">
        <div class="container">
          <div class="row row--grid">
            <div class="sign">
              <div class="sign__content">
                <form action="#" class="sign__form">
                  <a href="index.html" class="sign__logo">
                    <img src="/logo/logo.png" alt="" />
                  </a>

                  <div class="sign__group">
                    <input
                      type="text"
                      class="sign__input"
                      placeholder="Email"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>

                  <button
                    class="sign__btn"
                    type="button"
                    onClick={handleForgetPassword}
                  >
                    Send
                  </button>

                  <span class="sign__text">
                    We will send a password reset link to your Email
                  </span>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ForgotPassword;
