import mongoose from "mongoose"
let userSchema = mongoose.Schema({
    firstname:String,
    lastname:String,
    email:String,
    password:String
})

let userModel = mongoose.models.user_tbs || mongoose.model("user_tbs", userSchema)
export default userModel