import { Numerica } from './numerica'
import { Button } from './button'

export const Game = ({value, user, showStopGame, combo, userGameOver, handleDisconnectClick}) => {
  const highScore = parseInt(sessionStorage.getItem('x-highScore-numerica'))
  const highScoreUser = sessionStorage.getItem('x-highScore-numerica-user')
  
  return (
    <section className='flex flex-col justify-center'>
      <span className='stroke-dark text-lg'>High Score:{isNaN(highScore) ? 0 : highScore} </span>
      {highScoreUser && <span className="text-orange-300">By {highScoreUser}</span>}
      <Numerica value={value} combo={combo} />
      {user ? <span className="pl-2 text-orange-400">{user}</span> : <span className="pl-2 text-orange-400">
        Let's go!
      </span> }
      {userGameOver && <span className="text-red-400 stroke-dark">{userGameOver} lost!</span>}
      {showStopGame && <Button className="bg-red-600 text-white" onClick={handleDisconnectClick}>
        Stop Game
      </Button>}
  </section>
  )
}