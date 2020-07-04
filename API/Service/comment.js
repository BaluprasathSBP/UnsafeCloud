const { getDatabase } = require('../DB/mongodb');
const commentModel = require('../Models/comment');
const mongoose = require('mongoose');

const collectionName = 'comments';

// Add new comment
async function insertComment(comment) {
  debugger;
  await commentModel.create(comment);
}

// Get all comments
async function getComments() {
  debugger;
  return await commentModel.find();
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