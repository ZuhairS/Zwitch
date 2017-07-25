import { connect } from 'react-redux';
import { requestSingleChannel } from '../../actions/channel_actions';
import { withRouter } from 'react-router-dom';

import ChannelDetail from './channel_detail';

const mapStateToProps = ({ channels }) => ({
  channel: channels.selectedChannel
});

const mapDispatchToProps = dispatch => ({
  requestSingleChannel: channelId => dispatch(requestSingleChannel(channelId))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelDetail));
