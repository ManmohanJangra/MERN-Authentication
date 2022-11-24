import React, { useState, useEffect } from "react";
import axios from "axios";
import { json, Link } from "react-router-dom";

function Register() {
  const [userState, setUserState] = useState("");
  const [user, setUser] = useState({
    name: "",
    email: "",
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

    axios.post("http://localhost:3000/register", user).then((res) => {
      if (res.data.message === "User Registered Successfully") {
        setUserState(() => {
          return (
            <p className="login_alert correct">User Successfully Registered</p>
          );
        });
        window.location.replace("/");
      } else if (res.data.message === "User Already Registered") {
        setUserState(() => {
          return (
            <p className="login_alert incorrect">User Already Registered</p>
          );
        });
      } else {
        console.log(res);
      }
    });

    setUser({
      name: "",
      email: "",
      password: "",
    });
  };

  document.querySelector("title").innerText = "Registration";
  return (
    <div className="fxt-column-wrap justify-content-center">
      <div className="fxt-form">
        {userState}
        <form onSubmit={addUser}>
          <div className="form-group">
            <input
              onChange={handleChange}
              value={user.name}
              type="text"
              id="f_name"
              className="form-control"
              name="name"
              placeholder="First Name"
              required="required"
            />
          </div>
          <div className="form-group">
            <input
              onChange={handleChange}
              value={user.email}
              type="email"
              id="email"
              className="form-control"
              name="email"
              placeholder="E-mail Address"
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
            <div className="fxt-checkbox-box">
              <input id="checkbox1" type="checkbox" />
              <label for="checkbox1" className="ps-4">
                I agree with{" "}
                <a className="terms-link" href="#">
                  Terms
                </a>{" "}
                and{" "}
                <a className="terms-link" href="#">
                  Privacy Policy
                </a>
              </label>
            </div>
          </div>
          <div className="form-group">
            <button type="submit" className="fxt-btn-fill">
              Sign Up
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
  // }
}

export default Register;
