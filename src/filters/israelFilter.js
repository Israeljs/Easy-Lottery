// const arr = [01, 08, 09, 22, 04, 05, 12, 13, 14, 21, 25]
const mostDrawnDozens = [01, 08, 09, 22, 04, 05, 12, 02, 15, 20]
const notDrawnDozens = [01, 02, 13, 14, 20, 21, 25]
const israelFilter = (game) => {
  let countMost = 0
  let countNot = 0
  let result = false

  game.forEach((dezena) => {
    if (mostDrawnDozens.includes(dezena)) countMost += 1
    if (notDrawnDozens.includes(dezena)) countNot += 1
  })

  const most = (countMost >= 7 && countMost <= 09)
  const not = (countNot >= 03 && countNot <= 05)

  if (most && not) {
    result = true
  }

  return [result, `mais frequentes: ${countMost}`, `não sorteados: ${countNot}`]
}

// console.log(israelFilter(arr))
module.exports = israelFilter
