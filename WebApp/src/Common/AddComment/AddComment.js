
import React, { Component } from 'react';
import './AddComment.css';
import * as Constants from '../../Constants/index';

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
        let comment = { comment: this.state.newComment, parentId: this.props.parentId, blogId: this.props.blogId, whenCreated: Date.now };
        debugger;
        //TODO :Save
        if (this.state.newComment && this.state.newComment.trim() !== '') {
            // Simple POST request with a JSON body using fetch
            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(comment)
            };

            fetch(Constants.basecommentAPI, requestOptions)
                .then(response => response.json())
                .then(data => {
                    debugger;
                    this.props.commentCallBack(data);
                    const { opened } = this.state;
                    this.setState({
                        opened: !opened,
                        commentText: 'Add Comment',
                        newComment: ''
                    });
                }, err => {
                    console.log(err);
                    alert(err);
                });
        }
        event.preventDefault();
    }
}
export default AddComment;