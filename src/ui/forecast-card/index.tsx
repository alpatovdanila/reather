import { Condition } from 'ui/condition'
import { Reading } from 'ui/reading/reading'
import { Temperature } from 'ui/temperature'
import { Forecast } from 'features/forecast/types'
import React, { FC } from 'react'
import { Droplet, Wind } from 'ui/icon/icon'
import { LabeledIcon } from 'ui/labeled-icon'

import styles from 'ui/forecast-card/forecast-card.module.scss'
type Props = {
  forecast: Forecast
  highlighted?: boolean
}

export const ForecastCard: FC<Props> = ({ forecast, highlighted = false }) => {
  const { condition, humidity, temperature, wind } = forecast

  return (
    <div className={styles.shape} data-highlighted={highlighted}>
      <div className={styles.shapePart}>
        <div className={styles.readingsList}>
          <div className={styles.readingsListItem}>
            <Reading label={condition.description}>
              <Condition icon={condition.icon} />
            </Reading>
          </div>
          <div className={styles.readingsListItem}>
            <Reading label={'По ощущениям'}>
              <Temperature value={temperature.perceived} units={'C'} />
            </Reading>
          </div>
          <div className={styles.readingsListItem}>
            <Reading label={'На самом деле'}>
              <Temperature value={temperature.actual} units={'C'} />
            </Reading>
          </div>
        </div>
      </div>
      <div className={styles.secondaryShapePart}>
        <div className={styles.additionalInfo}>
          <LabeledIcon icon={Droplet}>{humidity}%</LabeledIcon>
        </div>
        <div className={styles.additionalInfo}>
          <LabeledIcon icon={Wind}>
            {wind.direction} {wind.speed} m/s
          </LabeledIcon>
        </div>
      </div>
    </div>
  )
}
