const express = require('express');
//const {startDatabase} = require('./DB/mongodb');
const { insertComment, getComments, getCommentsByParentId } = require('../../Service/comment');
const commentRouter = express.Router()

// Get all comments for the parent Id
commentRouter.get('/parent', async (req, res, next) => {
    try {
        var parentId = req.query.parentId;
        if (!parentId) {
            res.status(400).json("Invalid parentId");
        }
        res.status(200).json(await getCommentsByParentId(parentId));
    }
    catch (err) {
        next(err);
    }
});


//Get all comments
commentRouter.get('/', async (req, res, next) => {
    try {
        res.status(200).json(await getComments());
    }
    catch (err) {
        next(err);
    }
});


// Add new comment
commentRouter.post('/', async (req, res, next) => {
    try {
        var comment = req.body;
        if (!(comment && comment.blogId && comment.parentId && comment.comment)) {
            res.status(400).json("Please validate the input content");
        }
        res.status(200).json(await insertComment(comment));
    }
    catch (err) {
        next(err);
    }
});

module.exports = commentRouter;



