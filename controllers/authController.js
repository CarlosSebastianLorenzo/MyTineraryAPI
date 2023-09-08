import User from "../models/User.js";
import bcrypt from "bcryptjs";

const authController = {

    signUp: async (req, res, next) => {
        try {

            const passwordHash = bcrypt.hashSync(req.body.password, 10)

            let body = {...req.body}
            body.password = passwordHash

            const user = await User.create(body)

            return res.status(201).json({
                success: true, 
                response: user,
                message: 'Sign up successfully.'
            })

        } catch (err) {
            console.log(err);
            next(err);
        }
    }

}

export default authController;