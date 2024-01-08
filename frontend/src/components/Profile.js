import React from "react";
import { useState } from "react";
import "./profile.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
const Profile = () => {
  const dispatch=useDispatch();
  const navigate=useNavigate();
    const [name, setName]=useState("hehehe");
    const [number, setnumber]=useState("99999");
    const [url, setUrl]=useState("");
            // Handling case whether access token is present or not
           
const clickHandler =()=>{
  const atoken = window.localStorage.getItem("access_token");
  const rtoken = window.localStorage.getItem("refresh_token");
  const body={
      name: name,
      phoneNumber:number,
      profileImageUrl:url
    }
  if (atoken) {
              const config = {
                  headers: {
                      "Content-Type": "application/json",
                      Authorization: `Bearer ${atoken}`,
                  },
              };
console.log(atoken);
                Promise.resolve(
                    axios.post(
                        'http://localhost:5000/api/v1/user/', body, config
                    )
                )
                    .then((res) => {
                      console.log(res);
                        //successFunction(res)
                        // dispatch(addUser(name:res.bo))
                        // return;
                    })
                    .catch((error) => {
                        // Handling case when access token is expired
                        if (error.response && error.response.status === 401) {
                            axios
                                .post(process.env.REACT_APP_BACKEND_URL + "api/user/refresh", {
                                    refresh_token: rtoken,
                                })
                                .then((res) => {
                                    // Updating access and refresh token
                                    console.log(res);
                                    localStorage.setItem("access_token", res.data.access_token);
                                    localStorage.setItem("refresh_token", res.data.refresh_token);
                                    // getdata(1);
                                    // return;
                                })
                                .catch((error) => {
                                    // enqueueSnackbar("You are not logged in", {
                                    //     variant: "error",
                                    // });
                                    // setLoading(false);
                                    // window.localStorage.clear();
                                    navigate("/login");
                                    console.log(error)
                                    return;
                                });
                        } else {
                            // enqueueSnackbar("Some error occurred while submitting. Please try again", {
                            //     variant: "error",
                            // });
                            // setLoading(false);
                            alert("Some error occurred while submitting. Please try again"); console.log(error);
                        }
                    });
            } else {
                // enqueueSnackbar("You need to login first", {
                //     variant: "error",
                // });
                // window.localStorage.clear();
                // setLoading(false);
                navigate("/login");
                alert("Access token unavailable.");
                return;
            }
        }
  return (
    <div className="Profile">
      <form className="user-details-form" onSubmit={(e)=>e.preventDefault()}>
        <div style={{ display: "flex" }}>
          <img
            src={
              "https://static.everypixel.com/ep-pixabay/0329/8099/0858/84037/3298099085884037069-head.png"
            }
            alt="Avatar Preview"
            className="avatar-preview"
          />
          <button className="button3" >Upload New Image</button>
        </div>

        <div className="form-group">
          <label >Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e)=>setName(e?.target?.value)}
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            // value={formData.email}
            // onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label >Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={number}
            onChange={(e)=>{setnumber(e?.target?.value)}}
          />
        </div>
        <button className="button2" onClick={clickHandler}>Submit</button>
      </form>
    </div>
  );
};

export default Profile;
