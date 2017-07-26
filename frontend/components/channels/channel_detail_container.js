import { connect } from 'react-redux';
import { requestSingleChannel } from '../../actions/channel_actions';
import { withRouter } from 'react-router-dom';

import ChannelDetail from './channel_detail';

const mapStateToProps = state => ({
  channel: state.channels.selectedChannel,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  requestSingleChannel: channelId => dispatch(requestSingleChannel(channelId))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelDetail));
