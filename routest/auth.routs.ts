import {Request, Response, Router } from 'express';
import {User} from '../models/user';
import {check, validationResult} from 'express-validator';
//для хешування паролів npm i --save-dev @types/bcrypt
import bcrypt from 'bcrypt';

export const router = Router();

// /api/auth/register
router.post(
    '/register',
    [
        check('email', 'Email is not correct').isEmail(),
        check('password', 'Password is too short').isLength({min: 6})
    ],
    async (reg: Request, res: Response) => {
    try {
        const { email, password } = reg.body
        const errors = validationResult(reg)
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array(),
                message: 'Incorrect data'
            })
        }
        const candidate = await User.findOne({ email })
        if (candidate) {
            return res.status(400).json({message: 'The user already exist'})
        }

        const hashedPassword = await bcrypt.hash(password, 12)
        const user = new User({email, password: hashedPassword})
        await user.save()

        res.status(201).json({message: 'User created'})
    } catch (e) {
        res.status(500).json({message: 'Error 500'})
    }
})

// /api/auth/login
// router.post(
//     '/login',
//     [
//         check('email', 'Email is wrong').normalizeEmail().isEmail(),
//         check('password', 'Password is wrong').exists()
//     ],
//     async (reg: Request, res: Response) => {
//     try {
//         const { email, password } = reg.body
//         const errors = validationResult(reg)
//         if (!errors.isEmpty()) {
//             return res.status(400).json({
//                 errors: errors.array(),
//                 message: 'Incorrect data'
//             })
//         }
//         const user = await User.findOne({ email }) 

//         if (!user) {
//             return res.status(400).json({message: 'User not found'})
//         }
//         const isMatch = await bcrypt.compare(password, user.password)
//         if (!isMatch) {
//             return res.status(400).json({message: 'Password is wrong. Try again'})
//         }

//     } catch (e) {
//         res.status(500).json({message: 'Error 500'})
//     }

// })
