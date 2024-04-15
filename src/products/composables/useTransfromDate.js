export function transformDate(item) {
  const months = {
    1: 'January',
    2: 'February',
    3: 'March',
    4: 'April',
    5: 'May',
    6: 'June',
    7: 'July',
    8: 'August',
    9: 'September',
    10: 'October',
    11: 'November',
    12: 'December'
  }
  const monthKey = new Date(item).getMonth() + 1
  const monthName = months[monthKey]
  const dayKey = new Date(item).getDate()
  const yearKey = new Date(item).getFullYear()

  return dayKey + ' ' + monthName + ' ' + yearKey
}
