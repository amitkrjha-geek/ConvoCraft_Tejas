const updateProfile = async(req, res) => {
    const {id}=req.params;
    const { name, profileImageUrl, phoneNumber} = req.body;
    console.log(id,name,profileImageUrl,phoneNumber);
    const user = await User.findOneAndUpdate({_id:id}, {$set: {name:name, profileImageUrl:profileImageUrl, phoneNumber:phoneNumber}},  { new: true, useFindAndModify: false });
    console.log(user);
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