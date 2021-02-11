import { createStore, createEvent, createEffect } from 'effector'

import config from 'config'
import { stringifyUrl } from 'query-string'
const LOCAL_STORAGE_KEY = config.localStorageRootKey + '/queryHistory'

export const $query = createStore<string | null>(null)

export const $queryHistory = createStore<string[]>([])

export const setQuery = createEvent<string>()

export const getHistoryFromStorageFx = createEffect(() => {
  const lsEntry = localStorage.getItem(LOCAL_STORAGE_KEY)
  if (lsEntry) return JSON.parse(lsEntry) as string[]
  throw Error('There is no saved history')
})

export const writeHistoryToStorageFx = createEffect((history: string[]) => {
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(history))
})

export const writeQueryToUrlFx = createEffect((query: string | null) => {
  window.history.replaceState(
    {},
    '',
    stringifyUrl(
      {
        url: window.location.href,
        query: { city: query }
      },
      { skipNull: true }
    )
  )
})
