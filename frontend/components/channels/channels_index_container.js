import { connect } from 'react-redux';
import { requestAllChannels } from '../../actions/channel_actions';
import { selectAllChannels } from '../../reducers/selectors';

import Channels from './channels';

const mapStateToProps = ({ channels }) => ({
  channels: selectAllChannels(channels),
  title: 'All Channels'
});

const mapDispatchToProps = dispatch => ({
  requestChannels: () => dispatch(requestAllChannels())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Channels);
