import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default class Follow extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestFollows();
  }

  render() {
    const follows = this.props.follows;
    const currentUser = this.props.currentUser;

    if (currentUser && follows ) {
      return (
        <aside className="follow-container">
          <header className='follow-header'>
            <h2>Followed Channels</h2>
          </header>

          <section className='follow-list'>
            <ul>
              {follows.map(follow => (
                <li key={follow.id} className="follow-item">
                  <Link to={`/channels/${follow.followed_channel.id}`}>

                    <div className='follow-profile-img'>
                      <img src={follow.followed_channel.profile_image_url} />
                    </div>

                    <div className='follow-channel-stream-name'>
                      <h3>{follow.followed_channel.channel_name}</h3>
                      <h5>{follow.followed_channel.stream_name}</h5>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </aside>
      );
    } else {
      return <div className='follow-container'></div>;
    }
  }
}
