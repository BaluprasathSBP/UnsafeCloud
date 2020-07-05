import React, { Component } from 'react';

import './Comment.css';
import AddComment from '../../Common/AddComment/AddComment'

function Comment(props) {
    const commentsCollection = props.comments;
    debugger;
    const currentComment = props.comment;

    const nestedComments = (props.comments.filter(x => x.parentId === currentComment._id) || []).map(comment => {
        debugger;
        return <Comment key={comment._id} blog={props.blog} commentCallBack={props.commentCallBack} comments={props.comments} comment={comment} type="child" />
    });

    return (
        <div className="CommentBody">
            <div className="CommentText">{props.comment.comment}</div>
            <div>
                <AddComment {...props} parentId={props.comment._id} commentCallBack={props.commentCallBack} blogId={props.blog.BlogId} />
            </div>
            <div className="ChildComment">
                {nestedComments}
            </div>
        </div>
    );
}

export default Comment;