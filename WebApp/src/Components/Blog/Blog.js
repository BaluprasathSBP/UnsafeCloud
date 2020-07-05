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
                "BlogText": "Microsoft has built one of the top five publicly disclosed supercomputers in the world, making new infrastructure available in Azure to train extremely large artificial intelligence models, the company is announcing at its Build developers conference.\n  Built in collaboration with and exclusively for OpenAI, the supercomputer hosted in Azure was designed specifically to train that company’s AI models. It represents a key milestone in a partnership announced last year to jointly create new supercomputing technologies in Azure. \n  It’s also a first step toward making the next generation of very large AI models and the infrastructure needed to train them available as a platform for other organizations and developers to build upon.",
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