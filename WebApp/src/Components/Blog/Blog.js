import React, { Component } from 'react';
import AddComment from '../../Common/AddComment/AddComment'
import Comment from '../Comments/Comment';
import * as Constants from '../../Constants/index';
import './Blog.css';

class Blog extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Blog: {
                "BlogText": "Blog Text DataBlog Text DataBlog Text DataBlog Text DataBlog Text DataBlog Text DataBlog Text DataBlog Text DataBlog Text DataBlog Text DataBlog Text DataBlog Text DataBlog Text DataBlog Text DataBlog Text DataBlog Text DataBlog Text DataBlog Text DataBlog Text DataBlog Text DataBlog Text DataBlog Text Data",
                "BlogId": "f4920fd7-8a2a-4ba3-9e8e-6cdad75c7141"
            },
            comments: []
        };
        this.addCommentHandler = this.addCommentHandler.bind(this);
    }

    render() {
        return (
            <div >
                <div className="BlogBody">
                    <h1>UnsafeCloud Blog</h1>
                    <div className="BlogText" >{this.state.Blog.BlogText} </div>
                    <div>
                        <AddComment {...this.props} comments={this.state.comments} commentCallBack={this.addCommentHandler} parentId={this.state.Blog.BlogId} blogId={this.state.Blog.BlogId} />
                    </div>
                    <div className="CommentsHeader">
                        <b>Comments</b>
                    </div>
                    {this.state.comments.map((comment, i) => {
                        if (comment.parentId === this.state.Blog.BlogId) {
                            return (<div key={comment._id} className="CommentContent">
                                <Comment key={comment._id} blog={this.state.Blog} commentCallBack={this.addCommentHandler} comments={this.state.comments} comment={comment} />
                            </div>)
                        }
                    })}
                </div>
            </div>
        );
    }

    addCommentHandler(comment) {
        debugger;

        if(this.state)
        {
            this.setState({ comments: [ ...this.state.comments, comment ] });
        }        
    }

    componentDidMount() {
        fetch(Constants.basecommentAPI, {
            method: 'GET', headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(response => response.json())
            .then(data => {
                debugger;
                this.setState({ comments: data });
            });
    }
}
export default Blog;