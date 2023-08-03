import { Button } from './button'

export const InitialConfiguration = ({channelName, setChannelName, handleConnectClick}) => {
  return (
    <section>
      <input type="text" value={channelName} onChange={(e) => setChannelName(e.target.value)} />
      <Button onClick={handleConnectClick}>
        Start game
      </Button>
    </section>
  )
}