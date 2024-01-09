import React from "react";
import { useState } from "react";
import "./profile.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import ResponsiveAppBar from "./Header";
import { useSnackbar } from "notistack";
const Profile = () => {
  const { enqueueSnackbar } = useSnackbar();
  const user= useSelector((store)=>store.user);
  const dispatch=useDispatch();
  const navigate=useNavigate();
  const [image, setImage] = useState({
    preview:
      "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1704785462~exp=1704786062~hmac=a344c3d81899375f6c808c6764d8218153f476e812050d3208a00c9bae33bf35",
    data: "",
  });
    const [naam, setName]=useState( user?.name);
    const [number, setnumber]=useState(user?.phoneNumber);
    // const [url, setUrl] = useState(
    //   "https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=740&t=st=1704785462~exp=1704786062~hmac=a344c3d81899375f6c808c6764d8218153f476e812050d3208a00c9bae33bf35"
    // );
            // Handling case whether access token is present or not
const ImageHandler=(e)=>{
  let formData = new FormData()
    formData.append('file', image.data)
  // console.log(formData);
const img = {
  preview: URL.createObjectURL(e.target.files[0]),
  data: e.target.files[0],
};
// console.log(img);
setImage(img);
}
const clickHandler =async()=>{
  const atoken = window.localStorage.getItem("access_token");
  const rtoken = window.localStorage.getItem("refresh_token");
  const body={
      name: naam,
      phoneNumber:number,
      formData:image
    }
    // console.log(body);
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
                      const {name, phoneNumber, data} = res?.data?.userInfo;
                        //successFunction(res)
                        enqueueSnackbar("User Updated Successfully", {variant: 'success'});
                         dispatch(addUser({name:name,phoneNumber:phoneNumber, image:data.image}));
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
                enqueueSnackbar("You need to login first", {
                    variant: "error",
                });
                // window.localStorage.clear();
                // setLoading(false);
                navigate("/login");
                alert("Access token unavailable.");
                return;
            }
        }
  return (
    <>
      <ResponsiveAppBar />
      <div className="Profile">
        <form
          className="user-details-form"
          onSubmit={(e) => e.preventDefault()}
        >
          <div style={{ display: "flex" }}>
            <img
              src={image.preview}
              alt="Avatar Preview"
              className="avatar-preview"
            />
            <input
              name="file"
              className="button3"
              type="file"
              onChange={ImageHandler}
            />
          </div>

          <div className="form-group">
            <label>Name:</label>
            <input
              type="text"
              // value={naam}
              defaultValue={user?.name}
              onChange={(e) => setName(e?.target?.value)}
            />
          </div>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={user?.email}
              // onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Phone Number:</label>
            <input
              type="tel"
              // value={number}
              defaultValue={user?.phoneNumber}
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
    </>
  );
};

export default Profile;
