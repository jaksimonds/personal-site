import { oswald } from "fonts"
import { Hero, Link, TwoColumnCallout } from '@jsimonds/component-library'

const About = () => (
  <div>
    <Hero
      heading='About'
      headingClass={oswald.className}
      simple
    />
    <TwoColumnCallout image='/me.jpg'>
      <p>Hi, my name is Jackson and thank you for checking out my website! As a developer I aim to craft unique and accessible experiences with a majority of my expertise landing in the front-end web space. During my time working at <Link href='https://www.hiebing.com/' target="_blank">Hiebing</Link> I&apos;ve worked closely with designers, animators, and other developers to help tell each brand&apos;s story.</p>
      <p>From engaging web promotions to detailed product catalogues, job searches to locators, I have had the incredible privilege to work on a wide variety of projects both big and small.</p>
      <p>During my free time I run a Dungeons and Dragons campaign, go on long hikes with my dog, and play a wide range of video games. If you like what you see feel free to reach out to me by using any of the links on my <Link href='/contact'>Contact</Link> page or in the footer below!</p>
    </TwoColumnCallout>
  </div>
)

export default About