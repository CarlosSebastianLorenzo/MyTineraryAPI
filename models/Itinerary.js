import { Schema, model } from "mongoose";

const itinerarySchema = Schema({
    name: {type: String, required: true},
    cityId: {type: Schema.ObjectId, ref:'Cities', required: true},
    userName: {type: String, required: true},
    photoUser: {type: String, required: true},
    price: {type: Number, required: true, min: 1, max: 5},
    duration: {type: Number, required: true},
    photo: {type: String, required: true},
    likes: {type: Number, default: 0},
    tematicHashtags: [String],
    comments: {type: String}
},{
    timestamps: true
})

const Itinerary = model('itineraries', itinerarySchema);

export default Itinerary;