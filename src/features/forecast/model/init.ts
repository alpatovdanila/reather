import { forward, guard } from 'effector'
import { $dailyForecast, $error, getForecastFx } from 'features/forecast/model/units'
import { $query } from 'features/search-form/model'

forward({
  from: getForecastFx.doneData,
  to: $dailyForecast
})

$error.on(getForecastFx.done, () => false)
$error.on(getForecastFx.fail, () => true)

guard({
  source: $query,
  filter: (query) => !!query?.trim(),
  target: getForecastFx
})
