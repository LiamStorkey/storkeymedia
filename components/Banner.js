import React, { Component } from 'react';
import * as styles from '../styles/banner.style.js';
// import img from '../public/imgs/bg-dark-large.png';
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faInstagram, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons';
import BannerLink from '../components/BannerLink';
library.add(fab);

const textArray = ['Videographer', 'Streamer', 'Creator', 'Developer'];

class Banner extends Component {
  constructor() {
    super();
    this.state = { textIdx: 0 };
  }

  componentDidMount() {
    this.timeout = setInterval(() => {
      let currentIdx = this.state.textIdx;
      this.setState({ textIdx: currentIdx + 1 });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timeout);
  }

  render() {
    let textThatChanges = textArray[this.state.textIdx % textArray.length];
    
    return (
      <div style={styles.banner}>
        <div style={styles.linkstop}>
          <BannerLink style={styles.linksleft} href="https://www.instagram.com/_storkey/" title="Instagram" icon={faInstagram}/>
          <BannerLink style={styles.linksright} href="https://twitter.com/_storkey" title="Twitter" icon={faTwitter}/>
        </div>
        <div style={styles.tagline}>
          <div>Yoo!🤙🏻</div>
          <div>My name is Storkey and i'm a</div>
          <div><span style={styles.highlight}>{textThatChanges}</span> from Sydney here,</div>
          <div>Australia</div>
        </div>
        <div style={styles.linksbot}>
          <BannerLink style={styles.linksleft} href="https://www.youtube.com/channel/UC2cgTxjKaajneuGePAF25kQ" title="YouTube" icon={faYoutube}/>
          <BannerLink style={styles.linksright} href="mailto:storkey.liam@gmail.com?Subject=Hello there" title="Email" icon={faEnvelope}/>
        </div>
      </div>
    );
  }
}

export default Banner;