import { SearchForm } from '../features/search-form/components/search-form'
import { useEffect } from 'react'
import { applicationStarted } from './model'
import { ReactComponent as VeatherLogo } from './VEATHER.svg'
import styles from './app.module.scss'
import { FullForecast } from '../features/forecast/components/full-forecast'
import React from 'react'
export default () => {
  useEffect(() => {
    applicationStarted()
  }, [])

  return (
    <div className={styles.layout}>
      <div className={styles.logo}>
        <VeatherLogo />
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
