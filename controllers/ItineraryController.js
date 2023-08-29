import Itinerary from '../models/Itinerary.js'
import City from "../models/City.js";

const ItinerariesController = {
    createOneItinerary: async (req, res, next) => {
        try {
            let itinerary = await Itinerary.create(req.body)
            res.status(201).json({ response: itinerary})
        }
        catch (err) {
            next(err)
        }
    },

    createManyItineraries: async (req, res, next) => {
        try {
            let itineraries = await Itinerary.insertMany(req.body)
            res.status(201).json({ response: itineraries})
        } catch (err) {
            next(err)
        }
    },

    readAllItineraries: async (req, res, next) => {
        try {
            let itineraries = await Itinerary.find( )
            res.status(200).json({ response: itineraries})
        } catch (err) {
            next(err)
        }
    },

    readAllItinerariesByCity: async (req, res, next) => {
        try {
            let city = await City.findOne({ city : req.params.city })
            let itineraries = await Itinerary.find( { city: city._id} )
            res.status(200).json({ response: itineraries})
        } catch (err) {
            next(err)
        }
    },

    readOneItineraryById: async (req, res, next) => {
        try {
            let itinerary = await Itinerary.findById(req.params.id)
            res.status(200).json({ response: itinerary})
        } catch (err) {
            next(err)
        }
    },

    readOneItineraryByName: async (req, res, next) => {
        try {
            let itinerary = await Itinerary.findOne({ itinerary : req.params.itinerary })
            res.status(200).json({ response: itinerary })
        } catch (err) {
            next(err)
        }
    },

    updateOneItinerary: async (req, res, next) => {
        try {
            let itinerary = await Itinerary.findByIdAndUpdate(req.body._id, req.body, {new: true})
            res.status(200).json({ response: itinerary })
        } catch (err) {
            next(err)
        }
    },

    deleteOneItinerary: async (req, res, next) => {
        try {
            await Itinerary.findByIdAndDelete(req.body._id)
            res.status(200).json({ response: 'resource deleted successfully'})
        } catch (err) {
            next(err)
        }
    }
}

export default ItinerariesController