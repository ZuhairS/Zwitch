import React from 'react';
import { Link } from 'react-router-dom';
import ChannelVideo from '../videos/channel_video';
import ChannelFormContainer from './channel_form_container';
import Modal from 'react-modal';

export default class ChannelDetail extends React.Component {

  constructor(props) {
    super(props);
    this.channelId = props.match.params.channelId;
    this.state = {
      openModal: false
    };
    this.openCustomizeModal = this.openCustomizeModal.bind(this);
    this.modalRequestClose = this.modalRequestClose.bind(this);
    this.handleFollow = this.handleFollow.bind(this);
    this.handleUnfollow = this.handleUnfollow.bind(this);
  }

  componentDidMount() {
    this.props.requestSingleChannel(this.channelId);
    this.props.requestFollows();
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.channelId !== nextProps.match.params.channelId) {
      this.props.requestSingleChannel(nextProps.match.params.channelId);
    }
  }

  openCustomizeModal(event) {
    event.preventDefault();
    this.setState({openModal: true});
  }

  modalRequestClose() {
    this.setState({openModal: false});
  }

  handleFollow(event) {
    event.preventDefault();
    this.props.createFollow({
      follower_id: this.props.currentUser.id,
      followed_channel_id: this.channelId
    });
  }

  handleUnfollow(event) {
    event.preventDefault();
    this.props.deleteFollow(this.channelId);
  }

  render() {
    const channel = this.props.channel;

    let videoContainer;

    if (channel.video_url) {
      videoContainer = <ChannelVideo videoUrl={channel.video_url} />;
    } else {
      videoContainer = <span><img src={channel.banner_image_url} /></span>;
    }

    let channelButton;

    if (this.props.currentUser && channel.owner_name === this.props.currentUser.username) {
      channelButton = <button onClick={this.openCustomizeModal} id='open-customize-modal'>
        Customize Channel
      </button>;
    } else if (this.props.currentUser && this.props.followIds.includes(parseInt(this.channelId))) {
      channelButton = <button onClick={this.handleUnfollow} id='follow-button'>Unfollow</button>;
    } else {
      channelButton = <button onClick={this.handleFollow} id='follow-button'>Follow</button>;
    }

    if (channel) {
      return (
        <section className='channel-detail-container'>

          <nav className='channel-detail-nav'>
            <div id='img-placeholder'>
              <img id='channel-profile-image' src={channel.profile_image_url} />
            </div>
            <h2>{channel.channel_name}</h2>
            <h3>{channel.owner_name}</h3>
            <h3>Follows: 0</h3>
            <h3>Following: 0</h3>
            <div id='follow-customize-button-container'>
              { channelButton }
            </div>
          </nav>

          <section id='channel-video-container'>
            {videoContainer}
            <div id='channel-video-description'>
              <div id='channel-info'>
                <h3>{channel.stream_name}</h3>
                <p>{channel.stream_description}</p>
              </div>

              <div id='channel-viewers'>
                <h4>1 Viewer</h4>
              </div>
            </div>
          </section>

          <section className='channel-customize-modal'>
            <Modal isOpen={this.state.openModal}
              onRequestClose={this.modalRequestClose}
              className="Customize-Modal"
              overlayClassName="Overlay"
              contentLabel="Customize Channel Modal">
               <ChannelFormContainer modalRequestClose={this.modalRequestClose} />
             </Modal>
          </section>

        </section>
      );
    } else {
      return (
        <div>Fetching...</div>
      );
    }
  }

}
