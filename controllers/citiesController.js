import City from "../models/City.js";

const citiesController = {
    createOneCity: async (req, res, next) => {

        try {
            let city = await City.create(req.body)
            res.status(201).json({ response: city})
        }
        catch (err) {
            res.status(500).json({ response: err})
        }
    },

    readAllCities: async (req, res, next) => {
        try {
            let cities = await City.find()
            res.status(200).json({ response: cities})
        } catch (err) {
            res.status(500).json({ response: err})
        }
    },

    readOneCityById: async (req, res, next) => {
        try {
            let city = await City.findById(req.params.id)
            res.status(200).json({ response: city})
        } catch (err) {
            res.status(500).json({ response: err})
        }
    },

    readOneCityByName: async (req, res, next) => {
        try {
            let city = await City.findOne({ city : req.params.city })
            res.status(200).json({ response: city })
        } catch (err) {
            res.status(500).json({ response: err})
        }
    },
}

export default citiesController;