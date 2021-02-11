import config from 'config'
import { DayForecast as DayForecastType } from 'features/forecast/types'
import { findClosest, isSameDay } from 'lib/dateHelpers'
import { FC, useMemo } from 'react'
import ScrollContainer from 'react-indiana-drag-scroll'
import { ForecastCard } from 'ui/forecast-card'
import styles from './day-forecast.module.scss'
type Props = {
  dayForecast: DayForecastType
}

const localeDateOptions = {
  weekday: 'long',
  month: 'long',
  day: 'numeric'
}

const localeTimeOptions = {
  hour: '2-digit',
  minute: '2-digit'
}

const today = new Date(Date.now())

export const DayForecast: FC<Props> = ({ dayForecast }) => {
  const isForToday = isSameDay(today, new Date(dayForecast.timestamp))

  const timeStampClosestToNow = useMemo(() => {
    if (isForToday) {
      const dates = dayForecast.forecasts.map((forecast) => new Date(forecast.timestamp))
      return findClosest(dates, today).getTime()
    }
    return null
  }, [isForToday])

  return (
    <div className={styles.shape}>
      <div className={styles.title}>
        {isForToday
          ? 'Сегодня'
          : new Date(dayForecast.timestamp).toLocaleDateString(config.locale, localeDateOptions)}
      </div>
      <ScrollContainer className={styles.cards} hideScrollbars={true}>
        {dayForecast.forecasts.map((forecast) => (
          <div className={styles.card} key={forecast.timestamp}>
            <div className={styles.timeScale}>
              <div className={styles.time}>
                {new Date(forecast.timestamp).toLocaleTimeString(config.locale, localeTimeOptions)}
              </div>
            </div>
            <div className={styles.forecastCard}>
              <ForecastCard
                forecast={forecast}
                highlighted={timeStampClosestToNow === forecast.timestamp}
              />
            </div>
          </div>
        ))}
      </ScrollContainer>
    </div>
  )
}
