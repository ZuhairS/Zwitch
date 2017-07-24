import { connect } from 'react-redux';
import { requestAllChannels } from '../../actions/channel_actions';
import { selectAllChannels } from '../../reducers/selectors';

import Channels from './channels';

const mapStateToProps = ({ channels }) => ({
  channels: selectAllChannels(channels),
  title: 'Browse Channels',
  className: 'channels-index-container'
});

const mapDispatchToProps = dispatch => ({
  requestChannels: () => dispatch(requestAllChannels())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Channels);
