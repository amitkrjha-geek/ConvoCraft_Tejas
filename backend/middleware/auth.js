import jwtService from "../services/jwtServices.js";
import user from "../models/User.js";
const auth = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    // console.log(req.headers)
    // console.log(authHeader)
    // clg

    if (!authHeader) {
        return res.status(400).json({ error: "Bad Request" })
    }

    const token = authHeader.split(" ")[1];
    // console.log(token);
    try { 
        // console.log("Hi");
        const id = jwtService.verify(token) 
       console.log(id);
        if (!id) {
          //  console.log(5)
            return res.status(401).json({error:"Unauth, id is invalid"})
        }
        req.user = await user.findById(id.id).select("-password");
      //  console.log(req.user)
        next()
    }catch (e) {
        return res.status(401).json({error:"Unauth"})
    }

}

export default auth;