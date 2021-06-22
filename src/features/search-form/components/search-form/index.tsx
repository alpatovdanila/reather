import { History } from 'features/search-form/components/history/History'
import { SearchInput } from 'ui/search-input'
import { $query, $queryHistory, setQuery } from 'features/search-form/model'
import { useStore } from 'effector-react'
import React, { useState, FC, useEffect } from 'react'
import styles from './search-form.module.scss'

export const SearchForm: FC = () => {
  const history = useStore($queryHistory)
  const query = useStore($query)
  const [inputQuery, setInputQuery] = useState<string>('')

  useEffect(() => {
    setInputQuery(query || '')
  }, [query])

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    const query = e.currentTarget.value.trim()
    if (e.key === 'Enter' && query) setQuery(inputQuery)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputQuery(e.target.value)
  }

  return (
    <>
      <div className={styles.inputWrapper}>
        <SearchInput
          onSearchClick={() => setQuery(inputQuery)}
          onKeyDown={handleInputKeyDown}
          value={inputQuery}
          onChange={handleInputChange}
        />
      </div>
      <div className={styles.historyWrapper}>
        <History queries={history} onQuerySelect={setQuery} />
      </div>
    </>
  )
}
