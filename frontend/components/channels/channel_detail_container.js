import { connect } from 'react-redux';
import { requestSingleChannel } from '../../actions/channel_actions';

import ChannelDetail from './channel_detail';

const mapStateToProps = ({ channels }) => ({
  channel: channels.selectedChannel
});

const mapDispatchToProps = dispatch => ({
  requestSingleChannel: channelId => dispatch(requestSingleChannel(channelId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelDetail);
