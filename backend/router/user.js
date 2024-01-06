import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const express =require('express');
const passport = require('passport');
const router=express.Router();
import registerUser from "../controller/Auth/register.js";
import login from "../controller/Auth/login.js";
import logout from "../controller/Auth/logout.js";

// router.get('/users/:id', (req, res) => {
//     console.log(req.params);
//     res.json({
//         message: 'Updated',
//     })
//   })
router.get('/', (req, res) => {
    res.json({
        message:"hello world"
    })
});
router.post("/register",registerUser);
router.post("/login", login);
router.post('/logout',logout);
// router.get("/auth/google", passport.authenticate('google', { scope: ["profile", "email"] }));
// router.get("/auth/google/callback", passport.authenticate('google'), function (req, res) {
//     // res.redirect("https://leetcode.com");
//     // res.send(req.user)
//   });
 
// router.post("/login/oauth", googleSignIn);
export default router;