import React from "react";
import { useState } from "react";
import "./profile.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
const Profile = () => {
  const user= useSelector((store)=>store.user);
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const [file, setFile] = useState();
    const [name, setName]=useState(user?.name);
    const [number, setnumber]=useState(user?.phoneNumber);
    const [url, setUrl]=useState(user?.profileImageUrl);
            // Handling case whether access token is present or not
const ImageHandler=(e)=>{
console.log(e.target.files);
setFile(URL.createObjectURL(e.target.files[0]));
}
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
                Promise.resolve(
                    axios.put(
                        'http://localhost:5000/api/v1/user/', body, config
                    )
                )
                    .then((res) => {
                      const {name, phoneNumber, profileImageUrl} = res?.data?.userInfo;
                        //successFunction(res)
                         dispatch(addUser({name:name,phoneNumber:phoneNumber, profileImageUrl:profileImageUrl}));
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
                                    // console.log(res);
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
      <form className="user-details-form" onSubmit={(e) => e.preventDefault()}>
        <div style={{ display: "flex" }}>
          <img
            src={file}
            alt="Avatar Preview"
            className="avatar-preview"
          />
          <input className="button3" type="file" onChange={ImageHandler} />
          {/* //<button>Upload New Image</button> */}
        </div>

        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e?.target?.value)}
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
          <label>Phone Number:</label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={number}
            onChange={(e) => {
              setnumber(e?.target?.value);
            }}
          />
        </div>
        <button className="button2" onClick={clickHandler}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Profile;
