import { Schema, model } from "moongose";

const itinerarySchema = Schema({
    name: {type: "string", required: true},
    cityId: {type: Schema.ObjectId, ref:Cities, required: true},
    userId: {type: Schema.ObjectId, ref:users, required: true},
    price: {type: Number, required: true, min: 1, max: 5},
    duration: {type: Number, required: true},
    photo: {type: String, required: true},
    likes: {type: Number, default: 0},
    tematicHashtags: [String],
    comments: {type: Schema.ObjectId, ref:comments}
},{
    timestamps: true
})

const Itinerary = model('itineraries', itinerarySchema);

export default Itinerary;