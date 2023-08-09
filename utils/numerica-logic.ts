export const isMessageNumeric = (message: string) => {
  const parsed = parseInt(message)
  return !isNaN(parsed)
}

export const messageToNumber = (message: string) => {
  const parsed = parseInt(message)
  return parsed
}

