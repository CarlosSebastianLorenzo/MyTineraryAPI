import User from "../models/User.js";

const emailAlreadyExists = async (req, res, next) => {

    const userAlredyExists = await User.findOne({ email: req.body.email });
    
    if(!userAlredyExists){
        return next()
    }

    return res.status(409).json({
        success: false, 
        message: 'Email is already in use. Please choose another one.'
    })

}

export default emailAlreadyExists