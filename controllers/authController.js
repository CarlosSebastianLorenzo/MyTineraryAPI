import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken';

const authController = {

    signUp: async (req, res, next) => {
        try {

            const passwordHash = bcrypt.hashSync(req.body.password, 10)

            let body = {...req.body}
            body.password = passwordHash

            const user = await User.create(body)

            let {email, photo, _id} = user

            const token = jwt.sign( { email, photo }, process.env['SECRET_KEY'], { expiresIn: '1h'})

            return res.status(201).json({
                success: true, 
                response: {email, photo, _id},
                token: token,
                message: 'Sign up successfully.'
            })

        } catch (err) {
            console.log(err);
            next(err);
        }
    },

    signIn: async (req, res, next) => {
        try {

            const user = await User.findOne({ email: req.body.email})

            if (!user) {
                throw new Error("There are no users with this email address.")
            }

            let passwordIsCorrect = bcrypt.compareSync(req.body.password, user.password)

            if (!passwordIsCorrect){
                throw new Error("Incorrect email address or password")
            }

            let {email, photo, _id} = user

            const token = jwt.sign( { email, photo }, process.env['SECRET_KEY'], { expiresIn: '1h'})

            return res.status(200).json({
                success: true, 
                response: {email, photo, _id},
                token: token,
                message: 'Sign in successfully.'
            })

        } catch (err) {
            console.log(err);
            next(err);
        }
    },

    loginWithToken: (req, res) => {
        console.log(req.user)
        const { email, photo, name, _id} = req.user

        res.status(200).json({
            success:true,
            response: {email, photo, name, _id},
            message: 'Sign in successfully.'
        })
    }

}

export default authController;