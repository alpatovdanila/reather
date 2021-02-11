import { normalizeApiForecast, normalizeWeatherApiResponse } from 'api/weather/normalization'
import axios from 'axios'
import { WeatherAPI } from 'api/weather/types'
import config from 'config'
import { stringifyUrl } from 'query-string'

export const getWeather = (cityName: string) => {
  const url = stringifyUrl({
    url: config.api.url + '/forecast/',
    query: {
      q: cityName,
      appid: config.api.appId,
      lang: config.api.lang,
      units: config.api.units
    }
  })

  return axios
    .get<WeatherAPI.Response>(url)
    .then((d) => d.data)
    .then(normalizeWeatherApiResponse)
}
