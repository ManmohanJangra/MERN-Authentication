import React, { useState } from "react";

import { Link } from "react-router-dom";

function ForgetPass() {
  const [load, setLoad] = useState(false);

  let baseURL = "http://localhost:3000/";

  function loaded() {
    setLoad(true);
  }

  document.querySelector("title").innerText = "Forget Password";

  return (
    <section
      onLoad={loaded}
      className={
        "fxt-template-animation fxt-template-layout34" +
        (load === true ? " loaded" : "")
      }
    >
      <div className="fxt-shape">
        <div className="fxt-transformX-L-50 fxt-transition-delay-1">
          <img src="assets/img/elements/shape1.png" alt="Shape" />
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-8">
            <div className="fxt-column-wrap justify-content-between">
              <div className="fxt-animated-img">
                <div className="fxt-transformX-L-50 fxt-transition-delay-10">
                  <img
                    src="assets/img/figure/bg34-1.png"
                    alt="Animated Image"
                  />
                </div>
              </div>
              <div className="fxt-transformX-L-50 fxt-transition-delay-3">
                <Link to="/" className="fxt-logo">
                  <img src="assets/img/logo-34.png" alt="Logo" />
                </Link>
              </div>
              <div className="fxt-transformX-L-50 fxt-transition-delay-5">
                <div className="fxt-middle-content">
                  {window.location.href === `${baseURL}register` ? (
                    <div>
                      <h1 className="fxt-main-title">
                        Sign In to Rechage Direct
                      </h1>
                      <div className="fxt-switcher-description1">
                        Have Account
                        <Link to="/login" className="fxt-switcher-text ms-2">
                          Sign In
                        </Link>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <h1 className="fxt-main-title">
                        Create Account For Fast Usage
                      </h1>
                      <div className="fxt-switcher-description1">
                        If you don’t have an account You can
                        <Link to="/register" className="fxt-switcher-text ms-2">
                          Sign Up
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              <div className="fxt-transformX-L-50 fxt-transition-delay-7">
                <div className="fxt-qr-code">
                  <img src="assets/img/elements/qr-login-34.png" alt="QR" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="fxt-column-wrap justify-content-center">
              <div className="fxt-form">
                <form method="POST">
                  <div className="form-group">
                    <label for="email" className="fxt-label">
                      Email or Mobile Number
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="form-control"
                      name="email"
                      placeholder="Enter Email or Mobile Number"
                      required="required"
                    />
                  </div>
                  <div className="form-group">
                    <button type="submit" className="fxt-btn-fill">
                      Sign In
                    </button>
                  </div>
                </form>
                <div className="fxt-switcher-description3">
                  Return to?
                  <Link to="/login" className="fxt-switcher-text ms-1">
                    Log in
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ForgetPass;
