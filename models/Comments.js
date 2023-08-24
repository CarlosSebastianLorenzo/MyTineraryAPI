import { Schema, model } from "moongose";

const commentSchema = Schema({
    field: {type: String, required: true},
    user: {type: Schema.ObjectId, ref:users, required: true}
},{
    timestamps: true
})

const Comment = model('users', commentSchema);

export default Comment;