import { getWeather } from 'api/weather'
import { createEffect, createStore } from 'effector'
import { DailyForecast } from 'features/forecast/types'

export const $dailyForecast = createStore<DailyForecast | null>(null)

export const $error = createStore(false)

export const getForecastFx = createEffect(getWeather)

export const $fetching = getForecastFx.pending
