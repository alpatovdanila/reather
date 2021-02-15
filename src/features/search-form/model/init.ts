import { applicationStarted } from 'application/model'
import { forward } from 'effector'
import {
  $query,
  $queryHistory,
  getHistoryFromStorageFx,
  getQueryFromURLFx,
  setQuery,
  writeHistoryToStorageFx,
  writeQueryToUrlFx
} from './units'

forward({ from: setQuery, to: $query })

$queryHistory.on(setQuery, (history, query) => {
  return Array.from(new Set([...history, query]))
})

forward({ from: applicationStarted, to: [getHistoryFromStorageFx, getQueryFromURLFx] })

forward({ from: $query, to: writeQueryToUrlFx })

forward({ from: $queryHistory, to: writeHistoryToStorageFx })

forward({ from: getHistoryFromStorageFx.doneData, to: $queryHistory })

forward({ from: getQueryFromURLFx.doneData, to: $query })
