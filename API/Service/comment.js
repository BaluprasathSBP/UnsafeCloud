const {getDatabase} = require('../DB/mongodb');
const commentModel = require('../models/comment');
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
  debugger;
  throw new Error("Test");
   return await commentModel.find({parentId:id});
}

module.exports = {
    insertComment,   
    getComments,
    getCommentsByParentId
};