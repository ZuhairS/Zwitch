import { connect } from 'react-redux';
import Follow from './follow_index';

const mapStateToProps = (state) => ({
  state
});

const mapDispatchToProps = () => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Follow);
