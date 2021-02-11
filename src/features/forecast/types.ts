import { WeatherAPI } from 'api/weather/types'

export type WindDirection = 'N' | 'NE' | 'E' | 'SE' | 'S' | 'SW' | 'W' | 'NW'

export interface Forecast {
  timestamp: number
  condition: {
    description: string
    icon: WeatherAPI.Icon
  }
  wind: {
    direction: WindDirection
    deg: number
    speed: number
  }
  humidity: number
  temperature: {
    actual: number
    perceived: number
  }
}

export interface DayForecast {
  timestamp: number
  forecasts: Forecast[]
}

export type DailyForecast = DayForecast[]
