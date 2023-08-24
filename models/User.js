import { Schema, model } from "moongose";

const userSchema = Schema({
    name: {type: String, required: true},
    lastName: {type: String, required: true},
    mail: {type: String, required: true},
    photo: {type: String},
    password: {type: String, required: true},
    country: {type: String, required: true},
    rol: {type: String, default: "user"},
},{
    timestamps: true
})

const User = model('users', userSchema);

export default User;