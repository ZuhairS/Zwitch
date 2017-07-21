import { connect } from 'react-redux';
import { requestFeaturedChannels } from '../../actions/channel_actions';
import { selectFeaturedChannels } from '../../reducers/selectors';

import FeaturedChannels from './featured_channels';

const mapStateToProps = ({ channels }) => ({
  featuredChannels: selectFeaturedChannels(channels)
});

const mapDispatchToProps = dispatch => ({
  requestFeaturedChannels: () => dispatch(requestFeaturedChannels)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeaturedChannels);
