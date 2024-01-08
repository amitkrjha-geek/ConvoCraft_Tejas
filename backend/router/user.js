import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const express =require('express');
const passport = require('passport');
const router=express.Router();
import registerUser from "../controller/Auth/register.js";
import login from "../controller/Auth/login.js";
import logout from "../controller/Auth/logout.js";
import updateProfile from '../controller/Users/profile.js';
import { allUsers } from '../controller/Users/getAllUsers.js';
import refresh from '../controller/Auth/refresh.js';
import auth from '../middleware/auth.js';

router.put('/user/:id',auth,updateProfile)
router.post("/register", registerUser);
router.route("/").get(allUsers);
router.post("/login",login);
router.post('/logout',auth,logout);
router.post('/refresh', auth,refresh);
// router.get("/auth/google", passport.authenticate('google', { scope: ["profile", "email"] }));
// router.get("/auth/google/callback", passport.authenticate('google'), function (req, res) {
//     // res.redirect("https://leetcode.com");
//     // res.send(req.user)
//   });
 
// router.post("/login/oauth", googleSignIn);
export default router;