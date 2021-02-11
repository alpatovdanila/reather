import { WeatherAPI } from 'api/weather/types'
import { DailyForecast, Forecast, WindDirection } from 'features/forecast/types'
import { precisionToDay } from 'lib/dateHelpers'

export const normalizeApiForecast = (forecast: WeatherAPI.Forecast): Forecast => {
  return {
    condition: {
      description: forecast.weather[0].description,
      icon: forecast.weather[0].icon
    },
    humidity: forecast.main.humidity,
    temperature: {
      actual: Math.round(forecast.main.temp),
      perceived: Math.round(forecast.main.feels_like)
    },
    timestamp: forecast.dt * 1000,
    wind: {
      direction: degreesToDirection(forecast.wind.deg),
      deg: forecast.wind.deg,
      speed: forecast.wind.speed
    }
  }
}

export const normalizeWeatherApiResponse = (response: WeatherAPI.Response): DailyForecast => {
  return response.list.reduce((daily, rawForecast) => {
    const forecastDay = precisionToDay(new Date(rawForecast.dt * 1000))
    const forecastDayTimeStamp = forecastDay.getTime()
    const forecast = normalizeApiForecast(rawForecast)

    const day = daily.find((day) => day.timestamp === forecastDayTimeStamp)

    if (day) day.forecasts.push(forecast)
    else {
      daily.push({
        timestamp: forecastDayTimeStamp,
        forecasts: [forecast]
      })
    }

    return daily
  }, [] as DailyForecast)
}

export const degreesToDirection = (angle: number): WindDirection => {
  const directions: WindDirection[] = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW']
  return directions[Math.round(angle / 45) % 8]
}
