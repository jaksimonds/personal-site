'use client'
import { FC, useState } from 'react'
import Link from 'next/link'
import Heading from "../Heading"

import styles from './TabList.module.scss'

interface ITabList {
  heading: string
  tabs: {
    id: string
    label: string
    logo: string
    content: string
    cta: {
      text: string
      href: string
    }
  }[]
}

const TabList: FC<ITabList> = ({
  heading,
  tabs
}) => {
  const [activeTab, setActiveTab] = useState(tabs[0])
  
  return (
    <section className={styles.container}>
      <Heading level={2}>{heading}</Heading>
      <div className={styles.tabList}>
        <div className={styles.tabs} role="tablist" aria-orientation="vertical">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              id={`${tab.id}-tab`}
              className={`${styles.tab} ${activeTab.id === tab.id ? styles.tabSelected : ''}`}
              role="tab"
              aria-selected={activeTab.id === tab.id}
              aria-controls={`${activeTab.id}-panel`}
              onClick={() => setActiveTab(tab)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div
          className={styles.tabPanel}
          id={`${activeTab.id}-panel`}
          role='tabpanel'
          aria-labelledby={`${activeTab.id}-tab`}
        >
          <Heading level={3} className={styles.tabPanelHeading}>
            <span className='sr-only'>{activeTab.label}</span>
            <span dangerouslySetInnerHTML={{__html: activeTab.logo}} />
          </Heading>
          <p className={styles.tabPanelCopy}>{activeTab.content}</p>
          <Link className={styles.tabPanelLink} href={activeTab.cta.href} target="_blank">
            {activeTab.cta.text}
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" fill='#fff'><path d="M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z"/></svg>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default TabList