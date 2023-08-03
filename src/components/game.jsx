import { Numerica } from './numerica'
import { Button } from './button'

export const Game = ({value, handleDisconnectClick}) => {
  return (
    <section>
      <Numerica value={value} />
      <Button onClick={handleDisconnectClick}>
        Stop Game
      </Button>
  </section>
  )
}