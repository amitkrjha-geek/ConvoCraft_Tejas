import express from "express";
import Joi from "joi";
import bycrypt from "bcrypt";
import axios from "axios";
import User from '../../models/user.js';
import RedisServices from "../../services/redisServices.js";
const router = express.Router();
const registerUser = async (req, res, next) => {
    const userSchema = Joi.object({
      name: Joi.string().required(),
      email: Joi.string().required(),
      password: Joi.string().required(),
    });
    // console.log(req.body);
    const { error } = userSchema.validate(req.body);
    if (error) {
      console.log(error);
      return next(error);
    }
  
    try {
      const { name, email, password } = req.body;
      if (!email.includes("@")) {
        return res.status(400).json({ error: "Entered email address is not a valid email address." });
      }
//   console.log(email);
      const isEmailExist = await User.exists({ email: email });
      if (isEmailExist) {
        return res.status(400).json({ error: "This user already exists." });
      }
    //   const isUserNameExist = await User.exists({ userName: userName });
    //   if (isUserNameExist) {
    //     return res.status(400).json({ error: "This UserName already exists." });
    //   }
  
      const hashedPassword = await bycrypt.hash(password, 12);
      console.log(hashedPassword);
      User.create({ name: name, email: email, password: hashedPassword })
        .then(async () => {
          const otp = generateOtpCode();
          const config = {
            headers: {
              "Content-Type": "application/json",
            },
          };
          // sending mail to user
          console.log("first");
          let success=true;
          const data = {
            email: email,
            subject: "Verify your email address",
            name:name,
            otp: otp,
            company: "Tech Developers",
          };
        //   await axios
        //     .post(process.env.EMAIL_API_URL + "api/mail-verify", data, config)
        //     .then((res) => {
        //       success = true;
        //     })
        //     .catch((err) => {
        //       success = false;
        //       console.log(err)
        //       console.log("error in sending mail to :" + email);
        //     });
          // console.log("first1", success);

          // if (success) {
          //   // set the otp in redis
          //   const ttl = 60 * 10; // for 10 mins
          //   const ok = RedisServices.createClient().set(email, otp, "EX", ttl);
          //   if (!ok) {
          //     // discord.SendErrorMessageToDiscord(email, "OTP SEND", "error in setup the otp in redis !!");
          //     return res.status(500).json({ error: "Internal Server Error" });
          //   }
          // } else {
          //   // discord.SendErrorMessageToDiscord(email, "OTP SEND", "error in setup the otp in redis !!");
          //   return res.status(500).json({ error: "Internal Server Error" });
          // }
          return res.status(201).json({ message: "User created successfully" });
        })
        .catch((err) => {
          return res.status(500).json({ error: err.message });
        });
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  };
  const generateOtpCode = () => {
    const randomNumber = Math.floor(100000 + Math.random() * 900000);
    return randomNumber;
  };
export default registerUser;