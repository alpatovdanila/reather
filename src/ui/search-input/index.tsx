import React, { FC, useState } from 'react'
import { Search } from 'ui/icon/icon'
import styles from './search-input.module.scss'
type Props = React.HTMLAttributes<HTMLInputElement> & { value: string }

export const SearchInput: FC<Props> = ({ onFocus, onBlur, value, ...props }) => {
  const [focused, setFocused] = useState(false)

  const handleFocus = () => setFocused(true)

  const handleBlur = () => setFocused(false)

  return (
    <div className={styles.shape} data-focused={focused}>
      <input
        className={styles.actualInput}
        {...props}
        onFocus={handleFocus}
        onBlur={handleBlur}
        value={value}
      />
      <div className={styles.iconContainer}>
        <Search />
      </div>
    </div>
  )
}
