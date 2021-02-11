import { FC } from 'react'
import styles from 'ui/temperature/temperature.module.scss'
import { ReactComponent as MinusIcon } from 'ui/temperature/Minus.svg'

type Props = {
  value: number
  units: string
}

export const Temperature: FC<Props> = ({ value, units }) => (
  <div className={styles.shape}>
    {value < 0 && (
      <div className={styles.minus}>
        <MinusIcon />
      </div>
    )}
    <div className={styles.value}>
      <div className={styles.number}>{Math.abs(value)}</div>
      <div className={styles.units}>&deg;{units}</div>
    </div>
  </div>
)
