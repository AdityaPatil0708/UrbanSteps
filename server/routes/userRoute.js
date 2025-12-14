import express from 'express'
import { login, register, resendCode, verify, logout } from '../controllers/userController.js'

const router = express.Router();

router.post('/register',register)
router.post('/verify',verify)
router.post('/resend-code',resendCode)
router.post('/login',login)
router.post('/logout',logout)

export default router;