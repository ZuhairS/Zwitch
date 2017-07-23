import React from 'react';
import { Link } from 'react-router-dom';

export default class FeaturedChannels extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestFeaturedChannels();
  }

  render() {
    const featuredChannels = this.props.featuredChannels;

    if (featuredChannels) {
      return (
        
      );
    }
  }

}
