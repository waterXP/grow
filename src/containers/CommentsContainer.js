import { connect } from 'react-redux';
import Comments from '../components/Comments';

import { getComments } from '../actions/CommentAction';

const mapStateToProps = (state) => ({
  comments: state.comment.list
});

const mapDispatchToProps = {
  getComments
};

const CommentsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Comments);

export default CommentsContainer;
