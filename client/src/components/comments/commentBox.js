import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from 'actions';
import CommentList from 'components/comments/commentList';
import requireAuth from 'components/auth/requireAuth';

class CommentBox extends Component {
    state = { comment: '' }

    handleChange = (e) => {
        this.setState({ comment: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.saveComment(this.state.comment);
        this.setState({ comment: '' });
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h4>Add a Comment</h4>
                    <textarea onChange={this.handleChange} value={this.state.comment} />
                    <div>
                        <button>Submit Comment</button>
                    </div>
                </form>
                <button className="fetch-comments" onClick={this.props.fetchAllComments}>Fetch Comments</button>
                <CommentList />
            </div>
        );
    }
}

export default connect(null, actions)(requireAuth(CommentBox));