import { Router } from "express";
import authController from "../controllers/authController.js";
import { signUpSchema } from "../vaildators/signUpValidator.js";
import validator from "../middlewares/validator.js";
import emailAlreadyExists from "../middlewares/emailAlredyExists.js";

const { signUp } = authController;

const authRouter = Router();

authRouter.post('/signUp', validator(signUpSchema), emailAlreadyExists, signUp);

export default authRouter;