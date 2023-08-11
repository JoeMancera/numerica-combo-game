import { Combo } from './combo'
export const Numerica = ({ value, combo }) => {

  return (
    <div className="flex flex-col relative w-64 h-32 justify-center">
      <span className='animate-puls text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-t from-purple-400 to-pink-600 stroke'>
        {value}
      </span>
      <Combo value={combo} />
    </div>
  )
}