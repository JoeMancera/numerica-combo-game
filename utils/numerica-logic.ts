import { comboMessageList } from './common'

export const isMessageNumeric = (message: string) => {
  const parsed = Number(message)
  return !isNaN(parsed) && isFinite(parsed)
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

export const isComboMessage = (message: string) => {
  return comboMessageList.includes(message)
}

export const saveComboDate = () => {
  sessionStorage.setItem('x-combo-numerica-date', String(new Date().getTime()))
}

export const saveComboUser = (user: string) => {
  sessionStorage.setItem('x-combo-numerica-user', user)
}

export const isSamePreviousUserCombo = (user: string) => {
  const prevUser = sessionStorage.getItem('x-combo-numerica-user')
  return prevUser === user
}

export const isEndCombo = () => {
  const COMBO_TIME = 5000
  const comboDate = sessionStorage.getItem('x-combo-numerica-date')
  const now = new Date().getTime()
  const diff = now - parseInt(comboDate || '0')
  return diff > COMBO_TIME
}