import { connect } from 'react-redux';
import Follow from './follow_index';
import { requestFollows, createFollow, deleteFollow } from '../../actions/follow_actions';
import { selectFollows } from '../../reducers/selectors';
import { withRouter } from 'react-router-dom';

const mapStateToProps = ({follows, session}) => ({
  follows: selectFollows(follows),
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  requestFollows: () => dispatch(requestFollows()),
  deleteFollow: () => dispatch(deleteFollow())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Follow));
