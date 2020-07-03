const express = require('express');
//const {startDatabase} = require('./DB/mongodb');
const { insertComment, getComments, getCommentsByParentId } = require('../../Service/comment');
const commentRouter = express.Router()


commentRouter.all('*', async (req, res, next) => {
    try {
        debugger;
         next();
    }
    catch
    {
        debugger;
        next(err);
    }
});
// Get all comments for the parent Id
commentRouter.get('/parent', async (req, res,next) => {
    try{
        debugger;
        var parentId = req.query.parentId;
        res.status(200).json(await getCommentsByParentId(parentId));
    }
    catch(err)
    {
        next(err);
    }
   
});


//Get all comments
commentRouter.get('/', async (req, res) => {
    res.status(200).json(await getComments());
});


// Add new comment
commentRouter.post('/', async (req, res) => {
    var comment = req.body;
    res.status(200).json(await insertComment());
});

module.exports = commentRouter;



