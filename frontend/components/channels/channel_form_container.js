import { connect } from 'react-redux';
import { requestSingleChannel, customizeChannel, clearErrors } from '../../actions/channel_actions';
import { withRouter } from 'react-router-dom';

import ChannelForm from './channel_form';

const mapStateToProps = ({ channels }) => ({
  channel: channels.selectedChannel,
  errors: channels.errors
});

const mapDispatchToProps = dispatch => ({
  requestSingleChannel: channelId => dispatch(requestSingleChannel(channelId)),
  customizeChannel: channel => dispatch(customizeChannel(channel)),
  clearErrors: () => dispatch(clearErrors())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelForm));
