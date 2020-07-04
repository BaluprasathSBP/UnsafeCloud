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
            comments:[]
        }
    }

    render() {
        let commentData = { "comment": "This is from commentThis is from commentThis is from commentThis is from commentThis is from commentThis is from commentThis is from commentThis is from commentThis is from commentThis is from commentThis is from commentThis is from commentThis is from commentThis is from commentThis is from commentThis is from commentThis is from commentThis is from commentThis is from commentThis is from commentThis is from commentThis is from commentThis is from commentThis is from commentThis is from commentThis is from commentThis is from commentThis is from commentThis is from commentThis is from commentThis is from commentThis is from commentThis is from commentThis is from commentThis is from commentThis is from commentThis is from commentThis is from commentThis is from commentThis is from commentThis is from commentThis is from commentThis is from commentThis is from commentThis is from commentThis is from commentThis is from commentThis is from commentThis is from commentThis is from commentThis is from commentThis is from commentThis is from commentThis is from commentThis is from commentThis is from commentThis is from commentThis is from commentThis is from commentThis is from commentThis is from commentThis is from commentThis is from commentThis is from commentThis is from commentThis is from commentThis is from commentThis is from commentThis is from commentThis is from commentThis is from commentThis is from commentThis is from commentThis is from commentThis is from commentThis is from commentThis is from commentThis is from commentThis is from commentThis is from commentThis is from commentThis is from comment" };
        return (
            <div >
                <div className="BlogBody">
                    <h1>UnsafeCloud Blog</h1>
                    <div className="BlogText" >{this.state.Blog.BlogText} </div>
                    <div>
                        <AddComment {...this.props} />
                    </div>
                    <div className="CommentsHeader">
                        <b>Comments</b>
                    </div>
                    {this.state.comments.map((comment, i) => {
                        debugger;
                        if (comment.parentId) {
                           return( <div className="CommentContent">
                                <Comment blog={this.state.Blog} comments={this.state.comments} comment={comment} />
                            </div>)
                        }
                    })}
                </div>
            </div>
        );
    }

    componentDidMount() {
        fetch(Constants.commentAPI, {
            method: 'GET', headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(response => response.json())
            .then(data => {
                this.setState({ comments: data });
            });
    }
}
export default Blog;