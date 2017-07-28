import React from 'react';
import { Link, NavLink } from 'react-router-dom';

export default class Follow extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    if (this.props.currentUser) {
      this.props.requestFollows();
    }
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
                <Link key={follow.id} to={`/channels/${follow.followed_channel.id}`}>
                  <li className="follow-item">

                    <div className='follow-profile-img'>
                      <img src={follow.followed_channel.profile_image_url} />
                    </div>

                    <div className='follow-channel-stream-name'>
                      <h3>{follow.followed_channel.channel_name}</h3>
                      <h5>{follow.followed_channel.stream_name}</h5>
                    </div>
                  </li>
                </Link>
              ))}
            </ul>
          </section>
        </aside>
      );
    } else {
      return (
        <div className='follow-container'>
          <aside className="follow-container">
            <header className='follow-header'>
              <h2>Followed Channels</h2>
            </header>
          <section className='follow-list'>
            <p>Sign up or log in to follow channels and easily access your favorites here.</p>
          </section>
        </aside>
        </div>
      );
    }
  }
}
