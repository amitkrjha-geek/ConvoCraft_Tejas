import React from 'react'
import { useState, useRef } from 'react';
import { Emailvalidate, Passwordvalidate } from '../constants/validate';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
const Login = () => {
  // const dispatch=useDispatch();
  const [showLogin, setShowLogin] = useState(true);
  // const [errorMsgEmail, setErrorMsgEmail] = useState(null);
  // const [errorMsgPassword, setErrorMsgPassword] = useState(null);
  const Email = useRef(null);
  const Password = useRef(null);
  const Name = useRef(null);
  const navigate = useNavigate();

// const user = true;
const formToggle=()=>{
  console.log("hee")
  setShowLogin(!showLogin);
}
 const clickHandler =()=>{
  // const Emailmsg = Emailvalidate(Email.current.value);
  //   const Passwordmsg = Passwordvalidate(Password.current.value);
  //   setErrorMsgEmail(Emailmsg);
  //   setErrorMsgPassword(Passwordmsg);
  //   if (Emailmsg || Passwordmsg) return;
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const data = {
      email: Email?.current?.value,
      password: Password?.current?.value,
    };
    console.log(data);
    // axios.post(process.env.REACT_APP_BACKEND_URL + "api/user/login", data, config).then((response) => {
    //   // dispatch(setLoading(false))
    //   console.log(response);
    //   localStorage.setItem("userId", response.data.id)
    //   localStorage.setItem("access_token", response.data.access_token)
    //   localStorage.setItem("refresh_token", response.data.refresh_token)
    //   // enqueueSnackbar("Logged in successfully", {
    //   //   variant: 'success',
    //   // });
    //   navigate("/")
    // })
    //   .catch((error) => {
    //     console.log("hi");
    //     console.log(error);
    //     // enqueueSnackbar("Invalid  Credentials", {
    //     //   variant: 'error',
    //     // });
    //     // dispatch(setLoading(false))
    //   });
  };
  return (
    <>
    <div className="container">
      <form className="login-form" onSubmit={(e)=>e.preventDefault()}>
        <h2 className='login-form-h2'>{showLogin? "Log In" : "Sign Up"}</h2>
        {!showLogin && <input
          type="text"
          placeholder="Name"
          ref={Name}
          className='box-input'      
        />}
        <input
          type="text"
          placeholder="Email"
          ref={Email}
          className='box-input'      
        />
        <input
          type="password"
          placeholder="Password"
          ref={Password}
          
        />
        <button type="submit" onClick={clickHandler}>{showLogin? "Log In" : "Sign Up"}</button>
        <div className="Login_ordiv">
        <div className="Login_divider"></div>
        <div className="Login_or">OR</div>
        <div className="Login_divider"></div>
        </div>
        <button type="submit" style={{backgroundColor:"red", marginTop:"15px"}} >{showLogin ? "SignIn with Google": "Sign up with Google"}</button>
        <div style={{display:"flex",color:"black", fontSize:"16px", marginTop:"5px", gap:"2px"}}>
        <span>{showLogin ?" New User ?": " Already a user?"}</span><Link style={{marginLeft:"4px",}} onClick={formToggle}>{showLogin?"Sign Up":"Sign In"}</Link><span style={{marginLeft:"4px"}}>Now</span>
        </div>
        
      </form>
      
    </div>
    </>
  )
}

export default Login