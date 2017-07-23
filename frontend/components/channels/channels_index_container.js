import { connect } from 'react-redux';
import { requestAllChannels } from '../../actions/channel_actions';
import { selectAllChannels } from '../../reducers/selectors';

import ChannelIndex from './channel_index';

const mapStateToProps = ({ channels }) => ({
  allChannels: selectAllChannels(channels)
});

const mapDispatchToProps = dispatch => ({
  requestAllChannels: () => dispatch(requestAllChannels())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ChannelIndex);
