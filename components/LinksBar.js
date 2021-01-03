import * as React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faInstagram, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons';
library.add(fab);


// styles
const headertitle = {
  fontSize: 32,
  color: "white",
}

// data
const links = [
  {
    url: "https://www.instagram.com/_storkey/",
    title: "Instagram",
    icon: faInstagram
  },
  {
    url: "https://www.youtube.com/channel/UC2cgTxjKaajneuGePAF25kQ",
    title: "YouTube",
    icon: faYoutube
  },
  {
    url: "https://twitter.com/_storkey",
    title: "Twitter",
    icon: faTwitter
  }
]

const linkStyle = {
  color: "white",
  fontSize: 75
}


const listItems = links.map((link) =>
  <a style={linkStyle} target="_blank" href={link.url} title={link.title}><FontAwesomeIcon icon={link.icon}/></a>
);

const LinksBar = (props) => {
  return (
    <div style={props.style}>
      {listItems}
    </div>
  )
}

export default LinksBar
