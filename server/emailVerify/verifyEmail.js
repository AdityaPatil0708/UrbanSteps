import nodemailer from "nodemailer"
import "dotenv/config"

export const verifyEmail = (code, email) => {

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.MAIL_USER,
            pass: process.env.MAIL_PASS,
        },
    })
    const mailConfigurations = {
        from: process.env.MAIL_USER,
        to: email,
        subject: "Verify your email",
        html: `
            <div style="font-family: Arial, sans-serif; padding: 20px;">
                <h2>Email Verification</h2>
                <p>Your verification code is: <strong>${code}</strong></p>
                <p>This code will expire in 10 minutes.</p>
                <p>If you didn't request this code, please ignore this email.</p>
            </div>
        `,
    }
    
    transporter.sendMail(mailConfigurations, (error, info) => {
        if (error) {
            console.log(error)
        } else {
            console.log(`Email sent successfully: ${info?.response || "no response"}`)
        }
    })

}