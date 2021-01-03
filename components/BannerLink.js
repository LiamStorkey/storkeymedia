import React, { Component } from 'react';
import * as styles from '../styles/banner.style.js';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faInstagram, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons';
library.add(fab);


class BannerLink extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div style={this.props.style} onMouseOver={(e) => e.target.style.color = '#50FFB1'} onMouseOut={(e) => e.target.style.color = 'white'}>
        <a style={styles.link} target="_blank" href={this.props.href} title={this.props.title}><FontAwesomeIcon icon={this.props.icon} /></a>
      </div>
    );
  }
}

export default BannerLink;