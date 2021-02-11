import styles from 'features/search-form/components/history/history.module.scss'
import React, { FC } from 'react'

type Props = {
  queries: string[]
  onQuerySelect: (query: string) => void
}

export const History: FC<Props> = ({ queries, onQuerySelect }) => (
  <div className={styles.list}>
    {queries.map((query, index) => (
      <div className={styles.item} key={index} onClick={() => onQuerySelect(query)}>
        {query}
      </div>
    ))}
  </div>
)
