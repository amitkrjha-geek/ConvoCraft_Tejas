import User from "../../models/User.js";
import fs from 'fs'
import path from 'path'
const updateProfile = async(req, res) => {
    const id = req.user._id;
    console.log(req.body);
    const { name, phoneNumber } = req.body;
    const File= req.body.formData;
    
    var data1;
    fs.readFile(File.path, (err, data) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        else data1 = data;
    })
   // console.log(id,name,profileImageUrl,phoneNumber);
    const user = await User.findOneAndUpdate({_id:id}, {$set: {name:name, profileImageUrl:data1, phoneNumber:phoneNumber}},  { new: true, useFindAndModify: false });
    console.log(user);
    fs.unlinkSync(File.path);
    // console.log(phoneNumber);
    res.json({
        message: 'User Info Updated successfully',
        userInfo:{
            name:user.name,
            profileImageUrl:user.profileImageUrl,
            phoneNumber:user.phoneNumber
        }
    })
  }
  export default updateProfile;