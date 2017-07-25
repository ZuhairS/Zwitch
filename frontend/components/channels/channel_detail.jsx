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
  }

  componentDidMount() {
    this.props.requestSingleChannel(this.channelId);
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

  render() {
    const channel = this.props.channel;

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
            <div id='follow-button-container'>
              <button id='follow-button'>Follow</button>
            </div>
          </nav>

          <section id='channel-video-container'>
            <ChannelVideo videoUrl={channel.video_url} />
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


          <button onClick={this.openCustomizeModal} id='open-customize-modal'>
            <h3>Customize Channel</h3>
          </button>

          <section className='channel-customize-modal'>
            <Modal isOpen={true}
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
