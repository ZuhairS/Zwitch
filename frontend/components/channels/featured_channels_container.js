import { connect } from 'react-redux';
import { requestFeaturedChannels } from '../../actions/channel_actions';
import { selectFeaturedChannels } from '../../reducers/selectors';

import Channels from './channels';

const mapStateToProps = ({ channels }) => ({
  channels: selectFeaturedChannels(channels),
  title: 'Top Live Channels',
  className: 'featured-channels-container'
});

const mapDispatchToProps = dispatch => ({
  requestChannels: () => dispatch(requestFeaturedChannels())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Channels);
