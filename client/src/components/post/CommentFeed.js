import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CommentItem from './CommentItem';
import isEmpty from '../../validation/is-empty';

class CommentFeed extends Component {
  render() {
    const { comments, postId } = this.props;

    if (isEmpty(comments)) {
      console.log('comments are empty: ', comments);
    }
    return comments.map(comment => (
      <CommentItem key={comment._id} comment={comment} postId={postId} />
    ));
  }
}

CommentFeed.propTypes = {
  comments: PropTypes.array.isRequired,
  postId: PropTypes.string.isRequired
};

export default CommentFeed;
