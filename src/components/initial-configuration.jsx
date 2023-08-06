import { Button } from './button'

export const InitialConfiguration = ({channelName, setChannelName, handleConnectClick}) => {
  return (
    <section className="flex flex-col gap-4">
      <h1 className='flex flex-col text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-t from-purple-400 to-pink-600'>
        <span>Numerica</span><span>Combo Game</span></h1>
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