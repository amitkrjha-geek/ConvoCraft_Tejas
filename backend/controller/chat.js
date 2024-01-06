import asyncHandler from 'express-async-handler';

const accessChat = asyncHandler(async (req, res) => {
    const { userId } = req.body;
    if (!userId) {
        console.log("userId is not valid");
        return res.sendStatus(400);
    }
    
});