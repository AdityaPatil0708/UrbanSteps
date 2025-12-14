import User from "../models/userModel.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { verifyEmail } from "../emailVerify/verifyEmail.js";


const generateVerificationCode = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
}

export const register = async (req, res) => {
    try {
        const {firstname, surname, email, password} = req.body;
        if(!firstname || !surname || !email || !password){
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            })
        }
    
        const user = await User.findOne({email})
        if(user){
            return res.status(400).json({
                success: false,
                message: "User already exists"
            })
        }

        const hashedPassword = await bcrypt.hash(password, 10)
        const verificationCode = generateVerificationCode()
        const codeExpiry = new Date(Date.now() + 10 * 60 * 1000) // 10 minutes

        const newUser = await User.create({
            firstname,
            surname,
            email,
            password: hashedPassword,
            verificationCode,
            codeExpiry
        })

        verifyEmail(verificationCode, email)

        return res.status(201).json({
            success: true,
            message: "User created successfully. Please check your email for verification code.",
            userId: newUser._id
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

export const verify = async(req, res) => {
    try {
        const {email, code} = req.body;
        
        if(!email || !code){
            return res.status(400).json({
                success: false,
                message: "Email and verification code are required"
            })
        }

        const user = await User.findOne({email})
        if(!user){
            return res.status(400).json({
                success: false,
                message: "User not found"
            })
        }

        if(user.isVerified){
            return res.status(400).json({
                success: false,
                message: "Email already verified"
            })
        }

        if(!user.verificationCode || !user.codeExpiry){
            return res.status(400).json({
                success: false,
                message: "No verification code found. Please request a new one."
            })
        }

        if(new Date() > user.codeExpiry){
            return res.status(400).json({
                success: false,
                message: "Verification code has expired"
            })
        }

        if(user.verificationCode !== code){
            return res.status(400).json({
                success: false,
                message: "Invalid verification code"
            })
        }

        user.verificationCode = null
        user.codeExpiry = null
        user.isVerified = true
        await user.save()

        return res.status(200).json({
            success: true,
            message: "Email verified successfully"
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

export const resendCode = async(req, res) => {
    try {
        const {email} = req.body;
        
        if(!email){
            return res.status(400).json({
                success: false,
                message: "Email is required"
            })
        }

        const user = await User.findOne({email})
        if(!user){
            return res.status(400).json({
                success: false,
                message: "User not found"
            })
        }

        if(user.isVerified){
            return res.status(400).json({
                success: false,
                message: "Email already verified"
            })
        }

        const verificationCode = generateVerificationCode()
        const codeExpiry = new Date(Date.now() + 10 * 60 * 1000)

        user.verificationCode = verificationCode
        user.codeExpiry = codeExpiry
        await user.save()

        verifyEmail(verificationCode, email)

        return res.status(200).json({
            success: true,
            message: "Verification code resent successfully"
        })

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

export const login = async(req, res) => {
    try {
        const {email, password} = req.body;
        if(!email || !password){
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            })
        }

        const user = await User.findOne({email})
        if(!user){
            return res.status(400).json({
                success: false,
                message: "User not found"
            })
        }

        if(!user.isVerified){
            return res.status(400).json({
                success: false,
                message: "Please verify your email before logging in"
            })
        }

        const isPasswordMatched = await bcrypt.compare(password, user.password)
        if(!isPasswordMatched){
            return res.status(400).json({
                success: false,
                message: "Invalid password"
            })
        }

        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: "7d"})
        user.isLoggedin = true
        await user.save()

        return res.status(200).json({
            success: true,
            message: "Login Successful",
            token
        })
        
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

export const logout = async(req, res) => {
    try {
        const authHeader = req.headers.authorization;
        if(!authHeader){
            return res.status(401).json({
                success: false,
                message: "No token provided"
            })
        }

        const token = authHeader.split(" ")[1]
        if(!token){
            return res.status(401).json({
                success: false,
                message: "Invalid token format"
            })
        }

        let decoded;
        try {
            decoded = jwt.verify(token, process.env.JWT_SECRET)
        } catch (error) {
            if(error.name === "TokenExpiredError"){
                return res.status(401).json({
                    success: false,
                    message: "Token has expired"
                })
            }
            return res.status(401).json({
                success: false,
                message: "Invalid token"
            })
        }

        const user = await User.findById(decoded.id)
        if(!user){
            return res.status(404).json({
                success: false,
                message: "User not found"
            })
        }

        user.isLoggedin = false
        await user.save()

        return res.status(200).json({
            success: true,
            message: "Logout successful"
        })

    } catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}  