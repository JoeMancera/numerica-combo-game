import { useAnimation } from '../hooks/use-animation'

export const Combo = ({value}) => {
  const { animation } = useAnimation(value)
  return (
  <span className={`${animation ? 'shake-left-right' : '' } flex absolute top-0 right-0 animate-pulse text-orange-300`}>
    +{value}
  </span>
  )
}