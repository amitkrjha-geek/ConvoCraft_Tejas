import express from "express";
const router=express.Router();
router.get('/', (req, res) => {
    res.json({
        message:"hello world"
    })
});
// router.post("/register",registerUser);
// router.post("/login", loginUser);
// router.post("/login/oauth", googleSignIn);
export default router;