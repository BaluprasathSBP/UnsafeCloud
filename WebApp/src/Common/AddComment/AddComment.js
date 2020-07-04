
import React, { Component } from 'react';
import './AddComment.css';
import * as Constants from '../../Constants/index';
import uuid from 'react-uuid';

class AddComment extends Component {

    constructor(props) {
        debugger;        
        super(props);
        this.state = {
            opened: false,
            newComment: '',
            commentText: 'AddComment'
        };
        this.handleChange = this.handleChange.bind(this);
        this.SaveCommentClick = this.SaveCommentClick.bind(this);
        this.AddCommentClick = this.AddCommentClick.bind(this);
    }

    render() {
        const { opened } = this.state;
        return (
            <div>                
                <div>
                    <button className="AddCommentButton" onClick={this.AddCommentClick}>{this.state.commentText}</button>
                </div>
                {opened ? <div>
                    <textarea className="CommentTextArea" onChange={this.handleChange} value={this.state.newComment}></textarea>
                    <button className="AddCommentButton" onClick={this.SaveCommentClick}>Save Comment</button>
                </div> : <div></div>}
            </div>
        );

    }

    AddCommentClick() {
        const { opened } = this.state;        
        this.setState({
            opened: !opened,
            commentText: opened ? 'Add Comment' : 'Close',
            newComment: opened ? '' : this.state.newComment
        });
    }

    handleChange(event) {
        this.setState({ newComment: event.target.value });
    }

    SaveCommentClick(event) {
        //TODO :Save
        if (this.state.newComment && this.state.newComment.trim() != '') {
            fetch(Constants.commentAPI, {
                method: 'GET', headers: {
                    'Content-Type': 'application/json',
                }
            })
                .then(response => response.json())
                .then(json => {
                    const { opened } = this.state;
                    this.setState({
                        opened: !opened
                    });
                });


        }
        event.preventDefault();
    }

}

export default AddComment;