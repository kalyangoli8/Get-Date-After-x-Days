const {addDays} = require('date-fns')

const getDaysAfterXDays = days => {
  const result = addDays(new Date(2020, 7, 22), days)
  return `${result.getDate()}-${result.getMonth() + 1}-${result.getFullYear()}`
}

modue.exports = getDaysAfterXDays
