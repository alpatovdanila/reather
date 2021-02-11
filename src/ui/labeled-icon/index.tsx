import React, { FC } from 'react'
import styles from './labeled-icon.module.scss'
export const LabeledIcon: FC<{ icon: FC }> = ({ icon: Icon, children }) => (
  <div className={styles.shape}>
    <Icon />
    <div className={styles.label}>{children}</div>
  </div>
)
