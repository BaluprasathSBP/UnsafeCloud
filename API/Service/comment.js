const { getDatabase } = require('../DB/mongodb');
const commentModel = require('../Models/comment');

// Add new comment
async function insertComment(comment) {
  return await commentModel.create(comment);
}

// Get all comments
async function getComments() {
  return await commentModel.find().sort({ whenCreated: -1 });
}

// Get comments for the parent Id
async function getCommentsByParentId(id) {
  return await commentModel.find({ parentId: id }).sort({ whenCreated: -1 });
}

module.exports = {
  insertComment,
  getComments,
  getCommentsByParentId
};