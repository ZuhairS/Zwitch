import { connect } from 'react-redux';
import { requestFeaturedChannels, requestFeaturedChannel } from '../../actions/channel_actions';
import { selectFeaturedChannels } from '../../reducers/selectors';

import Featured from './featured';

const mapStateToProps = ({ channels }) => ({
  featuredChannels: selectFeaturedChannels(channels),
  featuredChannel: channels.featuredChannel
});

const mapDispatchToProps = dispatch => ({
  requestFeaturedChannels: () => dispatch(requestFeaturedChannels),
  requestFeaturedChannel: () => dispatch(requestFeaturedChannel)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Featured);
