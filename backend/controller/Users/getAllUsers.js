import asyncHandler from 'express-async-handler';
import User from '../../models/User.js';
export const allUsers = asyncHandler(async (req, res) => {
    const keyword = req.query.search
        ? {
            $or: [
                { name: { $regex: req.query.search, $options: "i" } },
                { email: { $regex: req.query.search, $options: "i" } },
            ],
        }
        : {};

    const users = await User.find(keyword).find({
        _id: { $ne: req.user._id },
    });
    res.send(users);
});
//AKIAU6GD35BBJVLI6CEY
//Ic2TZ95VHKPZWV7Xayo58ACPRJKtd2ZnsonvULOQ