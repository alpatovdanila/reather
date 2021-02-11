import { WeatherAPI } from 'api/weather/types'
import React, { FC } from 'react'
import styles from 'ui/condition/condition.module.scss'
import {
  CloudDrizzle,
  CloudLightning,
  CloudRain,
  CloudSnow,
  Cloud,
  Droplet,
  Moon,
  Sun
} from 'ui/icon/icon'

const ApiIconsToIcons = {
  '01d': Sun,
  '01n': Moon,
  '02d': Cloud,
  '02n': Cloud,
  '03d': Cloud,
  '03n': Cloud,
  '04d': Cloud,
  '04n': Cloud,
  '09d': CloudRain,
  '09n': CloudRain,
  '10d': CloudDrizzle,
  '10n': CloudDrizzle,
  '11d': CloudLightning,
  '11n': CloudLightning,
  '13d': CloudSnow,
  '13n': CloudSnow,
  '50d': Droplet,
  '50n': Droplet
}

type Props = {
  icon: WeatherAPI.Icon
}

export const Condition: FC<Props> = ({ icon }) => {
  const Icon = ApiIconsToIcons[icon]
  return (
    <div className={styles.shape}>
      <Icon width="48" height="48" viewBox="0 0 24 24" strokeWidth="2" />
    </div>
  )
}
