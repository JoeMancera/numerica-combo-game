import { Numerica } from './numerica'
import { Button } from './button'

export const Game = ({value, showStopGame, handleDisconnectClick}) => {
  return (
    <section>
      <Numerica value={value} />
      {showStopGame && <Button className="bg-red-600 text-white" onClick={handleDisconnectClick}>
        Stop Game
      </Button>}
  </section>
  )
}