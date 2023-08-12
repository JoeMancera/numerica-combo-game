import { Combo } from './combo'
import { useAnimation } from '../hooks/use-animation'
export const Numerica = ({ value, combo }) => {

  const { animation } = useAnimation(value)
  const { animation: animationCombo } = useAnimation(combo, 800)

  return (
    <div className="flex flex-col relative w-64 h-32 justify-center">
      <span className={`${animation ? 'bounce-top' : ''} text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-t from-purple-400 to-pink-600 stroke`}>
        {value}
      </span>
      <Combo value={combo} />
      <span className={`${animationCombo ? 'inline rotate-center' : 'hidden'} absolute left-1/2 -rotate-45 text-cyan-300 text-lg stroke-dark`}>Combo</span>
    </div>
  )
}