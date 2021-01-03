import Image from 'next/image'
import LinksBar from '../components/LinksBar'
import Banner from '../components/Banner'
import * as styles from '../styles/main.style'

export default function Home() {
  return (
    <Banner/>
    // <div style={styles.container}>
    //   <div style={styles.gridContainer}>
    //     <div style={styles.logoContainer}>
    //       <Image src="/imgs/logo.png" alt="me" width="400" height="330" />
    //     </div>
    //       <LinksBar style={styles.linksContainer}/>
    //   </div>
    // </div>
  )
}
