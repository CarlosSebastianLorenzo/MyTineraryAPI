import Comment from "../models/Comment.js"

const CommentsController = {
    createOneComment: async (req, res, next) => {
        try {
            let comment = await Comment.create(req.body)

            res.status(201).json({ response: comment})
        }
        catch (err) {
            next(err)
        }
    },

    createManyComments: async (req, res, next) => {
        try {
            let comments = await Comment.insertMany(req.body)
            res.status(201).json({ response: comments})
        } catch (err) {
            next(err)
        }
    },

    readAllComments: async (req, res, next) => {
        try {
            let comments = await Comment.find( )
            res.status(200).json({ response: comments})
        } catch (err) {
            next(err)
        }
    },

    readAllCommentsByItinerary: async (req, res, next) => {
        try {
            let comments = await Comment.find( { itineraryId: req.params.itineraryId} ).populate(
                {
                    path: 'userId',
                    select: 'fullName photo'
                }
            )
            res.status(200).json({ response: comments})
        } catch (err) {
            next(err)
        }
    },

    readOneCommentById: async (req, res, next) => {
        try {
            let comment = await Comment.findById(req.params.id)
            res.status(200).json({ response: comment})
        } catch (err) {
            next(err)
        }
    },

    readOneCommentByName: async (req, res, next) => {
        try {
            let comment = await Comment.findOne({ name : req.params.comment })
            res.status(200).json({ response: comment })
        } catch (err) {
            next(err)
        }
    },

    updateOneComment: async (req, res, next) => {
        try {
            console.log(req.body)
            let comment = await Comment.findByIdAndUpdate(req.body._id, req.body, {new: true}).populate(
                {
                    path: 'userId',
                    select: 'fullName photo'
                }
            )
            res.status(200).json({ response: comment })
        } catch (err) {
            next(err)
        }
    },

    deleteOneComment: async (req, res, next) => {
        try {
            await Comment.findByIdAndDelete(req.body._id)
            res.status(200).json({ response: 'resource deleted successfully'})
        } catch (err) {
            next(err)
        }
    }
}

export default CommentsController