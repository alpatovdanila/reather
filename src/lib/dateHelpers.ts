export const precisionToDay = (date: Date) => {
  const newDate = new Date(date.getTime())
  newDate.setHours(0, 0, 0, 0)
  return newDate
}

export const findClosest = (dates: Date[], targetDate: Date) => {
  let closest = dates[0]
  let minimalDelta = 0
  dates.forEach((date) => {
    const delta = Math.abs(date.getTime() - targetDate.getTime())
    if (delta < minimalDelta) {
      minimalDelta = delta
      closest = date
    }
  })
  return closest
}

export const isSameDay = (date1: Date, date2: Date) => {
  return precisionToDay(date1).getTime() === precisionToDay(date2).getTime()
}
