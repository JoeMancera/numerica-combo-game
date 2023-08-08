export const Numerica = ({ value, combo }) => {
  return (
    <div className="flex flex-col relative w-64 h-32 justify-center">
      <span className='animate-puls text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-t from-purple-400 to-pink-600 stroke'>
        {value}
      </span>
      <span className="flex absolute top-0 right-0 animate-pulse text-orange-300">
        +{combo}1
      </span>
    </div>
  )
}