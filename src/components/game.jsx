import { Numerica } from './numerica'
import { Button } from './button'

export const Game = ({value, handleDisconnectClick}) => {
  return (
    <section>
      <Numerica value={value} />
      <Button className="bg-red-600 text-white" onClick={handleDisconnectClick}>
        Stop Game
      </Button>
  </section>
  )
}