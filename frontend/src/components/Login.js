import React from 'react'
import { useState, useRef } from 'react';
import { Emailvalidate, Passwordvalidate } from '../constants/validate';
import { Link, useNavigate } from 'react-router-dom';
//import axios from 'axios';
const Login = () => {
  // const dispatch=useDispatch();
  // const [showLogin, setShowLogin] = useState(true);
  // const [errorMsgEmail, setErrorMsgEmail] = useState(null);
  // const [errorMsgPassword, setErrorMsgPassword] = useState(null);
  const Email = useRef(null);
  const Password = useRef(null);
  const Name = useRef(null);
  const navigate = useNavigate();


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
        <h2 className='login-form-h2'>Login</h2>
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
        <button type="submit" onClick={clickHandler}>Sign In</button>
        <div className="Login_ordiv">
                    <div className="Login_divider"></div>
                    <div className="Login_or">OR</div>
                    <div className="Login_divider"></div>
        </div>
        <button type="submit" style={{backgroundColor:"red", marginTop:"15px"}} >SignIn with Google</button>
        <div style={{display:"flex",color:"black", fontSize:"14px", marginTop:"5px"}}>
        <span>New User ?</span><Link style={{marginLeft:"4px",}}>SignUp</Link><span style={{marginLeft:"4px"}}>Now</span>
        </div>
        
      </form>
      
    </div>
    </>
  )
}

export default Login