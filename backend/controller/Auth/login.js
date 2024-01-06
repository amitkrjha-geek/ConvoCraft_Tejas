import express from "express";
import Joi from "joi";
import bycrypt from "bcrypt";
import axios from "axios";
import User from '../../models/user.js';
import JWTSERVICES from "../../services/jwtServices.js";
import RedisServices from "../../services/redisServices.js";
const refreshSecret = "mynameisankurshukla"
const login = async (req, res, next) => {
    const userSchema = Joi.object({
      email: Joi.string().required(),//This email can be username or phonenumber also
      password: Joi.string().required(),
    });
  console.log(req.body);
    const { error } = userSchema.validate(req.body);
  
    if (error) {
      next(error);
    }
  
    try {
      let user = await User.findOne({ email: req.body.email });
      // Incase email  field is filled with username
      if(user==null){
          user = await User.findOne({userName: req.body.email});
      }
      console.log(user);
      if (user) {
        
        bycrypt.compare(req.body.password, user.password)
          .then((isCorrect) => {
            if (isCorrect) {
              const id = user._id;
              const access_token = JWTSERVICES.sign({ id: id })
              const refresh_token = JWTSERVICES.sign({ id: id }, "7d", refreshSecret);
  
              const ttl = 60 * 60 * 24 * 7;
            //   RedisServices.createClient().set(id, refresh_token, "ex", ttl).then((ok) => {
            //     if (!ok) {
            //       return res.status(500).json({ error: "Internal Server Error" })
            //     }
            //   }).catch((error) => {
            //     console.log(error)
            //     return res.status(500).json({ error: "Internal Server Error" })
  
            //   })
              return res.status(200).json({ id, access_token, refresh_token });
            } else {
              return res.status(404).json({ error: "Invalid credentials" })
            }
          })
          .catch((error) => {
            console.log(error);
            return res.status(404).json({ error: "Invalid credentials" });
          });
      } else {
        return res.status(404).json({ error: "Invalid credentials" });
      }
    } catch (err) {
      console.log(err);
      return res.status(500).json({ error: err.message });
    }
  };
export default login;  