import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default class Chat extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestChatroom();
  }

  render() {
    const follows = this.props.follows;
    const currentUser = this.props.currentUser;

    if (currentUser && follows ) {
      return (
      );
    } else {
      return <div></div>;
    }
  }
}
