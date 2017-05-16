import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Comments.css';

import Comment from '../Comment';

class Comments extends Component {
  componentDidMount () {
    this.props.getComments();
  }

  render () {
    return (
      <div className='bordered'>
        <ul className='comments'>
          {this.props.comments.map((comment) =>
            <Comment
              key={comment.id}
              {...comment}
            />
          )}
        </ul>
      </div>
    );
  }
}

Comments.propTypes = {
  getComments: PropTypes.func.isRequired,
  comments: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    content: PropTypes.string.isRequired,
    updateTime: PropTypes.number.isRequired,
    authorId: PropTypes.number.isRequired,
    authorName: PropTypes.string.isRequired,
    authorIcon: PropTypes.string.isRequired
  }).isRequired).isRequired
};

export default Comments;
