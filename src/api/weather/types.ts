export namespace WeatherAPI {
  export type Icon =
    | '01d'
    | '01n'
    | '02d'
    | '02n'
    | '03d'
    | '03n'
    | '04d'
    | '04n'
    | '09d'
    | '09n'
    | '10d'
    | '10n'
    | '11d'
    | '11n'
    | '13d'
    | '13n'
    | '50d'
    | '50n'

  export interface Forecast {
    /**
     * Time of data forecasted, unix, UTC
     */
    dt: number

    main: {
      /**
       * Temperature. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
       */
      temp: number

      /**
       * This temperature parameter accounts for the human perception of weather. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
       */
      feels_like: number

      /**
       * Minimum temperature at the moment of calculation. This is minimal forecasted temperature (within large megalopolises and urban areas), use this parameter optionally. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
       */
      temp_min: number

      /**
       * Maximum temperature at the moment of calculation. This is maximal forecasted temperature (within large megalopolises and urban areas), use this parameter optionally. Unit Default: Kelvin, Metric: Celsius, Imperial: Fahrenheit.
       */
      temp_max: number

      /**
       * Atmospheric pressure on the sea level by default, hPa
       */
      pressure: number

      /**
       * Atmospheric pressure on the sea level, hPa
       */
      sea_level: number

      /**
       * Atmospheric pressure on the ground level, hPa
       */
      grnd_level: number

      /**
       * Humidity, %
       */
      humidity: number

      /**
       * Internal parameter
       */
      temp_kf: number
    }

    weather: [
      {
        /**
         * Weather condition id
         */
        id: number

        /**
         * Group of weather parameters (Rain, Snow, Extreme etc.)
         */
        main: string

        /**
         * Weather condition within the group. You can get the output in your language. (https://openweathermap.org/forecast5#multi)
         */
        description: string

        /**
         * Weather icon id
         */
        icon: Icon
      }
    ]

    clouds: {
      /**
       * Cloudiness, %
       */
      all: number
    }

    wind: {
      /**
       *  Wind speed. Unit Default: meter/sec, Metric: meter/sec, Imperial: miles/hour.
       */
      speed: number

      /**
       * Wind direction, degrees (meteorological)
       */
      deg: number
    }

    /**
     * Average visibility, metres
     */
    visibility: number

    /**
     * Probability of precipitation
     */
    pop: number

    rain: {
      /**
       * Rain volume for last 3 hours, mm
       */
      '3h': number
    }

    snow: {
      /**
       * Snow volume for last 3 hours, mm
       */
      '3h': number
    }

    sys: {
      /**
       * Part of the day (n - night, d - day)
       */
      pod: 'd' | 'n'
    }

    /**
     * Time of data forecasted, ISO, UTC
     */
    dt_txt: string
  }

  export interface Response {
    /**
     * Internal parameter
     */
    cod: any

    /**
     * Internal parameter
     */
    message: any

    /**
     * A number of timestamps returned in the API response
     */
    cnt: number

    list: Forecast[]

    city: {
      /**
       * City ID
       */
      id: number

      /**
       * City name
       */
      name: string

      coord: {
        /**
         * City geo location, latitude
         */
        lat: number

        /**
         * City geo location, longitude
         */
        lon: number
      }

      /**
       *  Country code (GB, JP etc.)
       */
      country: string

      /**
       * Shift in seconds from UTC
       */
      timezone: number

      sunrise: number

      sunset: number
    }
  }
}
