import JWTSERVICES from "../../services/jwtServices.js";
import joi from "joi";
import RedisServices from "../../services/redisServices.js";
import dotenv from "dotenv";
dotenv.config();

const logout = async (req, res, next) => {
  const refresh_secret = process.env.REFRESH_SECRET;
  const schema = joi.object({
    refresh_token: joi.string().required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    next(error);
  }

  try {
    const { id } = JWTSERVICES.verify(req.body.refresh_token, refresh_secret);
    RedisServices.createClient()
      .del(id)
      .then((ok) => {
        // console.log(ok);
        if (ok) {
          return res.status(200).json({ message: "Logout successfully." });
        }
      })
      .catch((err) => {
        return res.status(500).json({ err: "Internal Server Error" });
      });
  } catch (e) { 
    console.log(e.message)
  }
};

export default logout;