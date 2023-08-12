import { Numerica } from './numerica'
import { Button } from './button'

export const Game = ({value, user, showStopGame, combo, userGameOver, handleDisconnectClick}) => {
  const highScore = parseInt(sessionStorage.getItem('x-highScore-numerica'))
  const highScoreUser = sessionStorage.getItem('x-highScore-numerica-user')
  
  return (
    <section className='flex flex-col justify-center'>
      <span className='stroke-dark text-lg'>High Score:{isNaN(highScore) ? 0 : highScore} </span>
      {highScoreUser && <span className="text-orange-300 text-xs">By {highScoreUser}</span>}
      <Numerica value={value} combo={combo} />
      {user ? <span className="pl-2 text-orange-400 text-sm">{user}</span> : <span className="pl-2 text-orange-400">
        Let's go!
      </span> }
      {userGameOver && (
        <div className="flex flex-col gap-1">
          <span className="text-red-600 stroke-cyan text-lg">Game over!</span>
          <span className="text-red-600 stroke-black text-sm">{userGameOver}</span>
        </div>)}
      {showStopGame && <Button className="bg-red-600 text-white" onClick={handleDisconnectClick}>
        Stop Game
      </Button>}
  </section>
  )
}