
import mongoose from "mongoose";

const Userschema = new mongoose.Schema({
    name:String,
    email:{type:String,unique:true},
    password:String,
    role:{type:String,enum:["Admin","Customer"],default:"Customer"},
});
const User = mongoose.model.User("User", Userschema);
export default User;