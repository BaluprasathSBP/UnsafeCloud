import React, { Component } from 'react';

import './Comment.css';
import AddComment from '../../Common/AddComment/AddComment'

function Comment(props) {
    const commentsCollection = props.comments;
    const currentComment = props.comment;

    const nestedComments = (props.comments.find(x => x.parentId === currentComment.id) || []).map(comment => {
        return <Comment key={comment.id} {...props} type="child" />
    })

    return (
        <div className="CommentBody">
            <div className="CommentText">{props.comment.comment}</div>
            <div>
                <AddComment {...props} />
            </div>
            <div className="ChildComment">
                {nestedComments}
            </div>
        </div>
    );
}







export default Comment;