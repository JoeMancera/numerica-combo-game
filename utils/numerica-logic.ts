export const isMessageNumeric = (message: string) => {
  const parsed = parseInt(message)
  return !isNaN(parsed)
}

export const messageToNumber = (message: string) => {
  const parsed = parseInt(message)
  return parsed
}

export const nextNumber = (currentNumber: number, combo: number) => {
  return currentNumber + combo
}

export const nextCombo = (currentCombo: number) => {
  return currentCombo + 1
}

export const setHighScore = (currentNumber: number) => {
  const prevHigScore = sessionStorage.getItem('x-highScore-numerica')
  const highScore = prevHigScore ? Math.max(parseInt(prevHigScore), currentNumber) : currentNumber
  sessionStorage.setItem('x-highScore-numerica', String(highScore) ?? '0')
}

export const highScore = (): number => {
  const highScore = sessionStorage.getItem('x-highScore-numerica')
  return highScore ? parseInt(highScore) : 0
}
// la funcion isComboTime valida si dentro del los 5 segundos siguientes se enviaron más de 10 mensajes
// esto para aumentar en uno el combo
// export const isComboTime = (currentCombo: number, currentNumber: number, messages: string[]) => {
//   const comboTime = 5
//   const comboLimit = 10
//   const comboTimeLimit = comboTime * 1000
//   const now = new Date()
//   const messagesTime = messages.map((message) => {
//     const parsed = JSON.parse(message)
//     return parsed.time
//   })
//   const messagesTimeFiltered = messagesTime.filter((time) => {
//     const timeDiff = now.getTime() - time
//     return timeDiff <= comboTimeLimit
//   })
//   return messagesTimeFiltered.length >= comboLimit
// }
