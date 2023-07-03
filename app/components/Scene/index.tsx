import { FC } from 'react'
import styles from './Scene.module.scss'

interface IScene {
  children: any
}

const Scene: FC<IScene> = ({
  children
}) => {
  return (
    <section className={styles.container}>
      <div>
        <div className={styles.ruins}>
          <div className={styles.ruinsAccent} />
        </div>
        <div className={styles.ruins}>
          <div className={styles.ruinsAccent} />
        </div>
      </div>
      <div className={styles.content}>
        {children}
      </div>
      <div className={styles.frame}>
        <svg>
          <defs>
            <clipPath id='back-gold-path'>
              <path d="m0 96 60 16c60 16 180 48 300 42.7C480 149 600 107 720 85.3c120-21.3 240-21.3 360 16 120 37.7 240 111.7 300 149.4l60 37.3v32H0Z"/>
            </clipPath>
            <clipPath id='center-back-gold-path'>
              <path d="M0,96L48,85.3C96,75,192,53,288,85.3C384,117,480,203,576,224C672,245,768,203,864,160C960,117,1056,75,1152,53.3C1248,32,1344,32,1392,32L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
            </clipPath>
            <clipPath id='center-front-gold-path'>
              <path d="M0,64L48,85.3C96,107,192,149,288,192C384,235,480,277,576,298.7C672,320,768,320,864,288C960,256,1056,192,1152,170.7C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
            </clipPath>
            <clipPath id='front-gold-path'>
              <path d="M0 160h60c60 0 180 0 300 16s240 48 360 64 240 16 360-10.7c120-26.3 240-80.3 300-106.6l60-26.7v224H0Z"/>
            </clipPath>
            <filter id='noise'>
              <feTurbulence type='fractalNoise' baseFrequency={1}  result="turbulence" />
              <feColorMatrix type="saturate" values="0"/>
              <feBlend in='SourceGraphic' in2='turbulence' mode='multiply' />
            </filter>
          </defs>
        </svg>
        <div className={styles.left}>
          <div className={styles.gold}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" aria-hidden>
              <path filter="url(#noise)" clipPath='url(#back-gold-path)' d="m0 96 60 16c60 16 180 48 300 42.7C480 149 600 107 720 85.3c120-21.3 240-21.3 360 16 120 37.7 240 111.7 300 149.4l60 37.3v32H0Z"/>
            </svg>
          </div>
          <div className={styles.gold}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" aria-hidden>
              <path filter="url(#noise)" clipPath='url(#front-gold-path)' d="M0 160h60c60 0 180 0 300 16s240 48 360 64 240 16 360-10.7c120-26.3 240-80.3 300-106.6l60-26.7v224H0Z"/>
            </svg>
          </div>
        </div>
        <div className={styles.center}>
          <div className={styles.gold}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" aria-hidden>
              <path filter="url(#noise)" clipPath='url(#center-back-gold-path)' d="M0,96L48,85.3C96,75,192,53,288,85.3C384,117,480,203,576,224C672,245,768,203,864,160C960,117,1056,75,1152,53.3C1248,32,1344,32,1392,32L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
            </svg>
          </div>
          <div className={styles.gold}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path filter="url(#noise)" clipPath='url(#center-front-gold-path)' d="M0,64L48,85.3C96,107,192,149,288,192C384,235,480,277,576,298.7C672,320,768,320,864,288C960,256,1056,192,1152,170.7C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
            </svg>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.gold}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" aria-hidden>
              <path filter="url(#noise)" clipPath='url(#back-gold-path)' d="m0 96 60 16c60 16 180 48 300 42.7C480 149 600 107 720 85.3c120-21.3 240-21.3 360 16 120 37.7 240 111.7 300 149.4l60 37.3v32H0Z"/>
            </svg>
          </div>
          <div className={styles.gold}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" aria-hidden>
              <path filter="url(#noise)" clipPath='url(#front-gold-path)' d="M0 160h60c60 0 180 0 300 16s240 48 360 64 240 16 360-10.7c120-26.3 240-80.3 300-106.6l60-26.7v224H0Z"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Scene