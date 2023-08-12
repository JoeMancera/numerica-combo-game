import { useEffect, useState } from 'preact/hooks'

export const useAnimation = (value: number | string) => {
  const [animation, setAnimation] = useState(false)
  useEffect(() => {
    setAnimation(true)
    setTimeout(() => setAnimation(false), 100)
  }, [value])

  return {animation}
}