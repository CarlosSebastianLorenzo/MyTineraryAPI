import { Router } from "express";
import authController from "../controllers/authController.js";
import { signUpSchema, signInSchema } from "../validators/signUpValidator.js";
import validator from "../middlewares/validator.js";
import emailAlreadyExists from "../middlewares/emailAlredyExists.js";
import passport from "../middlewares/passport.js";

const { signUp, signIn, loginWithToken } = authController;

const authRouter = Router();

authRouter.post('/signUp', validator(signUpSchema), emailAlreadyExists, signUp);
authRouter.post('/signIn', validator(signInSchema), signIn);
authRouter.get('/token', passport.authenticate( 'jwt', {session:false} ), loginWithToken);


export default authRouter;