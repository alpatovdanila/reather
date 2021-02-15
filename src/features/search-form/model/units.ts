import { createStore, createEvent, createEffect } from 'effector'

import config from 'config'
import { parseUrl, stringifyUrl } from 'query-string'
const LOCAL_STORAGE_KEY = config.localStorageRootKey + '/queryHistory'

export const $query = createStore<string | null>(null)

export const $queryHistory = createStore<string[]>([])

export const setQuery = createEvent<string>()

export const getHistoryFromStorageFx = createEffect(() => {
  const lsEntry = localStorage.getItem(LOCAL_STORAGE_KEY)
  if (lsEntry) return JSON.parse(lsEntry) as string[]
  throw Error('There is no saved history')
})

export const getQueryFromURLFx = createEffect(async () => {
  const query = parseUrl(window.location.href).query
  if (!!query.city && typeof query.city === 'string') return query.city
  throw new Error('No city found in url')
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
