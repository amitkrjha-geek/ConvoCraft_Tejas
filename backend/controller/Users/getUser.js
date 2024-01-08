import asyncHandler from "express-async-handler";
import user from "../../models/user.js";
export const getUser = asyncHandler(async (req, res) => {
    const id = req.user._id;
    if (!id)
    {
        res.sendStatus(400);
    }
    const data = await user.find({ _id: id }).select("-password -googleId");
    if (!data) res.sendStatus(400);
    res.send(data);

})
