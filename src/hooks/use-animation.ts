import { useEffect, useState } from 'preact/hooks'

export const useAnimation = (value: number | string, duration?: number) => {
  const [animation, setAnimation] = useState(false)
  useEffect(() => {
    setAnimation(true)
    setTimeout(() => setAnimation(false), duration ?? 100)
  }, [value])

  return {animation}
}