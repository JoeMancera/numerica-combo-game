import { useState } from 'preact/hooks'
import './app.css'
import { getTwitchClient, connect, onMessage, disconnect } from '../utils/twitchConnection'

export function App() {
  const [channelName, setChannelName] = useState('rothiotome')
  const [twitchClient, setTwitchClient] = useState(null)

  const handleConnectClick = () => {
    const client = getTwitchClient(channelName)
    connect(client)
    onMessage(client, (channel, user, message, self) => {
      console.log(user.username, message)
    })
    setTwitchClient(client)
    console.log('Connected')
  }

  const handleDisconnectClick = () => {
    disconnect(twitchClient)
    console.log('Disconnected')
  }
  return (
    <>
      <h1>Numerica Combo Game</h1>
      <input type="text" value={channelName} onChange={(e) => setChannelName(e.target.value)} />
        <button onClick={handleConnectClick}>
          Connect to Twitch
        </button>
        <button onClick={handleDisconnectClick}>
          Disconnect from Twitch
        </button>
    </>
  )
}
