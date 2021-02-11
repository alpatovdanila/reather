import { useStore } from 'effector-react'
import { DayForecast } from 'features/forecast/components/day-forecast'
import { $dailyForecast, $error } from 'features/forecast/model'
import styles from './full-forecast.module.scss'
import React, { FC } from 'react'

export const FullForecast: FC = () => {
  const dailyForecast = useStore($dailyForecast)
  const error = useStore($error)

  if (error)
    return (
      <div className={styles.placeholder}>
        <div className={styles.error}>Ничего не найдено. Попробуйте изменить запрос.</div>
      </div>
    )

  if (!dailyForecast)
    return (
      <div className={styles.placeholder}>
        <div className={styles.welcome}>Начните с ввода города в поле поиска</div>
      </div>
    )

  return (
    <>
      {dailyForecast.map((dayForecast) => (
        <div className={styles.dayContainer} key={dayForecast.timestamp}>
          <DayForecast dayForecast={dayForecast} />
        </div>
      ))}
    </>
  )
}
