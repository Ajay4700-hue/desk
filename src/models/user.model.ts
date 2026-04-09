import mongoose, { mongo } from "mongoose";

interface IUser {
  _id: mongoose.Types.ObjectId
  name: string
  email: string
  image?: string
  password?: string
  mobile?: string
  role: "user" | "deliveryBoy" | "admin"
}

const userSchema = new mongoose.Schema<IUser>({
name:{
    type:String,
    required:true
},
email:{
    type:String,
    required:true
},
password:{
    type:String,
    required:true
},
image:{
    type:String,
},
mobile:{
    type:String,
},
role:{
    type:String,
    enum:["user", "admin"],
    default:"user"
},

},{timestamps:true})
const User = mongoose.models?.User || mongoose.model<IUser>("User", userSchema);

export default User;