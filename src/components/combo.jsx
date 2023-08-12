import { useAnimation } from '../hooks/use-animation'

export const Combo = ({value}) => {
  const { animation } = useAnimation(value)
  const comboTextColor = value < 3 ? 'text-cyan-300' : value < 6 ? 'text-orange-300' : value < 9 ? 'text-orange-500' : 'text-red-600'
  return (
  <span className={`${animation ? 'shake-left-right text-white' : '' } flex absolute top-0 right-0 animate-pulse ${comboTextColor}`}>
    +{value}
  </span>
  )
}