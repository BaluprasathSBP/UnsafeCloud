
const mongoose = require('mongoose');

/**
 * Comment model schema.
 */
const commentSchema = new mongoose.Schema({
    id:{type:String, auto:true},
    comment: { type: String, required: true },
    parentId: { type: String, required: false,default:null },
    blogId: { type: String, required:true },
    whenCreated:{type:Date,required:false,default:Date.now}
});

module.exports = mongoose.model('comment', commentSchema);