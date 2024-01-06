import mongoose from 'mongoose';
const userSchema = new mongoose.Schema(
    {
      // userId:{ type: "integer", required: true},
      name: { type: "string", required: true },
      email: { type: "string", required: true },
      profileImageUrl: { type: "string", default: ""},
      password: { type: "string",default:null},
      googleId: { type: "string", default:null},
      isVerified: { type: "boolean", default: false}
    },
    { timestamps: true }
  );
export default mongoose.model("User",userSchema);