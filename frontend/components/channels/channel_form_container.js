import { connect } from 'react-redux';
import { requestSingleChannel, customizeChannel, clearErrors } from '../../actions/channel_actions';

import ChannelForm from './channel_detail';

const mapStateToProps = ({ channels }) => ({
  channels: channels.allChannels,
  errors: channels.errors
});

const mapDispatchToProps = dispatch => ({
  requestSingleChannel: channelId => dispatch(customizeChannel(channelId)),
  customizeChannel: channel => dispatch(customizeChannel(channel)),
  clearErrors: () => dispatch(clearErrors())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelForm);
