import { SearchForm } from 'features/search-form/components/search-form'
import { FC, useEffect } from 'react'
import { applicationStarted } from './model'
import { ReactComponent as ReatherLogo } from './REATHER.svg'
import styles from './app.module.scss'
import { FullForecast } from 'features/forecast/components/full-forecast'
import React from 'react'

const App: FC = () => {
  useEffect(() => {
    applicationStarted()
  }, [])

  return (
    <div className={styles.layout}>
      <div className={styles.logo}>
        <ReatherLogo />
      </div>
      <div className={styles.content}>
        <div className={styles.form}>
          <SearchForm />
        </div>
        <div className={styles.results}>
          <FullForecast />
        </div>
      </div>
      <div className={styles.footer}>
        🖐 <a href={'//github.com/alpatovdanila'}>Danila Alpatov</a>
      </div>
    </div>
  )
}

export default App
