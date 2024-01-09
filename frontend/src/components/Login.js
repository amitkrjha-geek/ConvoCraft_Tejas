import React from "react";
import { useState, useRef } from "react";
import { Emailvalidate, Passwordvalidate } from "../constants/validate";
import { Link, useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
const Login = () => {
  const { enqueueSnackbar } = useSnackbar();
  const dispatch = useDispatch();
  const [showLogin, setShowLogin] = useState(true);
  const [errorMsgEmail, setErrorMsgEmail] = useState(null);
  const [errorMsgPassword, setErrorMsgPassword] = useState(null);
  const Email = useRef(null);
  const Password = useRef(null);
  const Name = useRef(null);
  const navigate = useNavigate();

  // const user = true;
  const formToggle = () => {
    setShowLogin(!showLogin);
  };
  const clickHandler = () => {
    setErrorMsgEmail(Emailvalidate(Email));
    setErrorMsgPassword(Passwordvalidate(Password));
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    if (showLogin) {
      const data = {
        email: Email?.current?.value,
        password: Password?.current?.value,
      };
      axios
        .post("http://localhost:5000/api/v1/login", data, config)
        .then((response) => {
          // dispatch(setLoading(false))
          // console.log(response);
          localStorage.setItem("userId", response.data.id);
          localStorage.setItem("access_token", response.data.access_token);
          localStorage.setItem("refresh_token", response.data.refresh_token);
          enqueueSnackbar("Logged in successfully", {
            variant: "success",
          });
          dispatch(addUser({ userId: response.data.id }));
          navigate("/chat");
        })
        .catch((error) => {
          // console.log("hi");
          console.log(error);
          enqueueSnackbar("Invalid  Credentials", {
            variant: "error",
          });
          // dispatch(setLoading(false))
        });
    } else {
      const data = {
        name: Name?.current?.value,
        email: Email?.current?.value,
        password: Password?.current?.value,
      };
      axios
        .post("http://localhost:5000/api/v1/register", data, config)
        .then((response) => {
          // dispatch(setLoading(false))
          // console.log(response.data);
          enqueueSnackbar("User Successfully Registered, Sign In to continue", {
            variant: "success",
          });
          // navigate("/");
          setShowLogin(!showLogin);
        })
        .catch((error) => {
          const msg = error?.response?.data?.error;
          enqueueSnackbar(msg, {
            variant: "error",
          });
          // dispatch(setLoading(false))
        });
    }
  };
  return (
    <>
      <div className="container">
        <form className="login-form" onSubmit={(e) => e.preventDefault()}>
          <h2 className="login-form-h2">{showLogin ? "Log In" : "Sign Up"}</h2>
          {!showLogin && (
            <input
              type="text"
              placeholder="Name"
              ref={Name}
              className="box-input"
            />
          )}

          <input
            type="text"
            placeholder="Email"
            ref={Email}
            className="box-input"
          />
          {/* {<p style={{color:"red"}}>{errorMsgEmail}</p>} */}
          <input type="password" placeholder="Password" ref={Password} />
          {/* {<p style={{color:"red"}}>{errorMsgPassword}</p>} */}
          <button type="submit" onClick={clickHandler}>
            {showLogin ? "Log In" : "Sign Up"}
          </button>
          <div className="Login_ordiv">
            <div className="Login_divider"></div>
            <div className="Login_or">OR</div>
            <div className="Login_divider"></div>
          </div>
          <button
            type="submit"
            style={{ backgroundColor: "red", marginTop: "15px" }}
          >
            {showLogin ? "SignIn with Google" : "Sign up with Google"}
          </button>
          <div
            style={{
              display: "flex",
              color: "black",
              fontSize: "16px",
              marginTop: "5px",
              gap: "2px",
            }}
          >
            <span>{showLogin ? " New User ?" : " Already a user?"}</span>
            <Link style={{ marginLeft: "4px" }} onClick={formToggle}>
              {showLogin ? "Sign Up" : "Sign In"}
            </Link>
            <span style={{ marginLeft: "4px" }}>Now</span>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
