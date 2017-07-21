import { connect } from 'react-redux';
import { requestFeaturedChannel } from '../../actions/channel_actions';

import FeaturedChannel from './featured_channel';

const mapStateToProps = ({ channels }) => ({
  featuredChannel: channels.featuredChannel
});

const mapDispatchToProps = dispatch => ({
  requestFeaturedChannel: () => dispatch(requestFeaturedChannel())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeaturedChannel);
