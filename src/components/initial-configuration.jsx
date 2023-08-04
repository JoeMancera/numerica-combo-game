import { Button } from './button'

export const InitialConfiguration = ({channelName, setChannelName, handleConnectClick}) => {
  return (
    <section className="flex flex-col gap-4">
      <h1 className='text-red-600'>Numerica Combo Game</h1>
      <label htmlFor="channelName">Channel Name
        <input name="channelName" type="text" value={channelName} onChange={(e) => setChannelName(e.target.value)} />
      </label>
      <Button className="bg-green-500" onClick={handleConnectClick}>
        Start game
      </Button>
    </section>
  )
}