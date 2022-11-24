import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, redirect } from "react-router-dom";

function Login() {
  const [userState, setUserState] = useState("");
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setUser((newUser) => {
      return {
        ...newUser,
        [name]: value,
      };
    });
  };

  const addUser = (e) => {
    e.preventDefault();

    axios.post("http://localhost:3000/login", user).then((res) => {
      let dataMessage = res.data.message;
      switch (dataMessage) {
        case "Successfully Logged In":
          setUserState(() => {
            return <p className="login_alert correct">Login Successfully</p>;
          });
          break;

        case "Incorrect Password":
          setUserState(() => {
            return (
              <p className="login_alert incorrect">
                Incorrect Username Or Password
              </p>
            );
          });
          break;

        default:
          null;
      }
    });

    setUser({
      username: "",
      password: "",
    });
  };

  document.querySelector("title").innerText = "Login";

  return (
    <div className="fxt-column-wrap justify-content-center">
      <div className="fxt-form">
        {userState}
        <form onSubmit={addUser}>
          <div className="form-group">
            <input
              onChange={handleChange}
              value={user.username}
              type="email"
              id="email"
              className="form-control"
              name="username"
              placeholder="Enter Email or Mobile Number"
              required="required"
            />
          </div>
          <div className="form-group">
            <input
              onChange={handleChange}
              value={user.password}
              id="password"
              type="password"
              className="form-control"
              name="password"
              placeholder="********"
              required="required"
            />
            <i
              toggle="#password"
              className="fa fa-fw fa-eye toggle-password field-icon"
            ></i>
          </div>
          <div className="form-group">
            <div className="fxt-switcher-description2 text-right">
              <Link to="/forget-password" className="fxt-switcher-text">
                Recovery Password
              </Link>
            </div>
          </div>
          <div className="form-group">
            <button type="submit" className="fxt-btn-fill">
              Sign In
            </button>
          </div>
        </form>
      </div>
      <div className="fxt-style-line">
        <span>Or Continus with</span>
      </div>
      <ul className="fxt-socials">
        <li className="fxt-google">
          <a href="#" title="google">
            <i className="fab fa-google-plus-g"></i>
          </a>
        </li>
        <li className="fxt-apple">
          <a href="#" title="apple">
            <i className="fab fa-apple"></i>
          </a>
        </li>
        <li className="fxt-facebook">
          <a href="#" title="Facebook">
            <i className="fab fa-facebook-f"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Login;
