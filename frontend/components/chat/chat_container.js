import { connect } from 'react-redux';
import Chat from './chat';
import { requestChatroom, createChatMessage } from '../../actions/chat_actions';
import { selectChatMessages } from '../../reducers/selectors';
import { withRouter } from 'react-router-dom';

const mapStateToProps = ({chatMessages, channels, session}) => ({
  chatMessages: selectChatMessages(chatMessages),
  channel: channels.selectedChannel,
  currentUser: session.currentUser
});

const mapDispatchToProps = dispatch => ({
  requestChatroom: channelId => dispatch(requestChatroom(channelId)),
  createChatMessage: message => dispatch(createChatMessage(message))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Chat));
