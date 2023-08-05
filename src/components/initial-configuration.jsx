import { Button } from './button'

export const InitialConfiguration = ({channelName, setChannelName, handleConnectClick}) => {
  return (
    <section className="flex flex-col gap-4">
      <h1 className='text-red-600 drop-shadow-md'>Numerica Combo Game</h1>
      <label className='flex flex-col text-left'>
        <span className="pl-2">Channel Name</span>
        <input className="text-black" name="channelName" type="text" value={channelName} onChange={(e) => setChannelName(e.target.value)} />
      </label>
      <Button className="bg-green-500" onClick={handleConnectClick}>
        Start game
      </Button>
    </section>
  )
}