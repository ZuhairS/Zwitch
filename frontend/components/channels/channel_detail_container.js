import { connect } from 'react-redux';
import { requestSingleChannel } from '../../actions/channel_actions';
import { requestFollows, createFollow, deleteFollow } from '../../actions/follow_actions';
import { selectFollowIds } from '../../reducers/selectors';
import { withRouter } from 'react-router-dom';

import ChannelDetail from './channel_detail';

const mapStateToProps = state => ({
  channel: state.channels.selectedChannel,
  followIds: selectFollowIds(state.follows),
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  requestSingleChannel: channelId => dispatch(requestSingleChannel(channelId)),
  requestFollows: () => dispatch(requestFollows()),
  createFollow: follow => dispatch(createFollow(follow)),
  deleteFollow: channelId => dispatch(deleteFollow(channelId))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelDetail));
