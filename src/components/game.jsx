import { Numerica } from './numerica'
import { Button } from './button'

export const Game = ({value, user, showStopGame, handleDisconnectClick}) => {
  const highScore = sessionStorage.getItem('x-highScore-numerica')
  
  return (
    <section className='flex flex-col justify-center'>
      <span>High Score {parseInt(highScore) ?? 0}</span>
      <Numerica value={value} />
      {user ? <span className="pl-2 text-orange-400">{user}</span> : <span className="pl-2 text-orange-400">
        Let's go!
      </span> }
      {showStopGame && <Button className="bg-red-600 text-white" onClick={handleDisconnectClick}>
        Stop Game
      </Button>}
  </section>
  )
}