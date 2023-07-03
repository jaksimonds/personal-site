import Scene from "@/components/Scene"
import Heading from "./components/Heading"

import styles from './Page.module.scss'

const Homepage = () => (
  <Scene>
    <div className={styles.copy}>
      <Heading level={1}>Jackson Simonds</Heading>
      <p>Front-end developer.</p>
    </div>
  </Scene>
)

export default Homepage