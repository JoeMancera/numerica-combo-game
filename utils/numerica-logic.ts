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

export const setHighScore = (currentNumber: number, username: string) => {
  const prevHighScore = sessionStorage.getItem('x-highScore-numerica')
  const highScore = prevHighScore ? Math.max(parseInt(prevHighScore), currentNumber) : currentNumber

  if(highScore === currentNumber) {
    saveHighScore(highScore)
    saveHighScoreUser(username)
  }
}

export const saveHighScore = (newHightScore: number) => {
  sessionStorage.setItem('x-highScore-numerica', String(newHightScore))
}

export const saveHighScoreUser = (user: string) => {
  sessionStorage.setItem('x-highScore-numerica-user', user)
}

export const highScore = (): number => {
  const highScore = sessionStorage.getItem('x-highScore-numerica')
  return highScore ? parseInt(highScore) : 0
}

export const highScoreUser = (): string | null => {
  const highScoreUser = sessionStorage.getItem('x-highScore-numerica-user')
  return highScoreUser ? highScoreUser :null
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
