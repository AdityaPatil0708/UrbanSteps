import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    email: { type: String, required: true, unique: true },
    firstname: { type: String, required: true },
    surname: { type: String, required: true },
    password: { type: String, required: true },
    verificationCode: { type: String, default: null },
    codeExpiry: { type: Date, default: null },
    isVerified: { type: Boolean, default: false },
    isLoggedin: { type: Boolean, default: false },
    
}, {timestamps: true})

export default mongoose.model("User", userSchema)