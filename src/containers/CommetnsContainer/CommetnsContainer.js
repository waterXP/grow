import { connect } from 'react-redux';
import Comments from '../../components/Comments'

import { getComments } from '../../actions/CommentsAction';

const mapStateToProps = (state) => ({
  comments: state.comments
});

const mapDispatchToProps = {
  getComments
};

const CommentsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Commetns);

export default CommentsContainer;
