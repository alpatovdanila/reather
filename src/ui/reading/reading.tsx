import { FC } from 'react'
import styles from 'ui/reading/reading.module.scss'
type Props = {
  label: string
}

export const Reading: FC<Props> = ({ label, children }) => (
  <div className={styles.shape}>
    <div className={styles.content}>{children}</div>
    <div className={styles.label}>{label}</div>
  </div>
)
