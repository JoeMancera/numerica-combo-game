import { useState } from 'preact/hooks'
import './app.css'
import { getTwitchClient, connect, onMessage, disconnect } from '../utils/twitchConnection'
import { Button } from './components/button'

export function App() {
  const [channelName, setChannelName] = useState('rothiotome')
  const [twitchClient, setTwitchClient] = useState(null)
  const [isConnected, setIsConnected] = useState(false)

  const handleConnectClick = () => {
    const client = getTwitchClient(channelName)
    connect(client)
    onMessage(client, (channel, user, message, self) => {
      console.log(user.username, message)
    })
    setTwitchClient(client)
    setIsConnected(true)
    console.log('Connected')
  }

  const handleDisconnectClick = () => {
    disconnect(twitchClient)
    setIsConnected(false)
    console.log('Disconnected')
  }
  return (
    <>
      <h1>Numerica Combo Game</h1>
      <input type="text" value={channelName} onChange={(e) => setChannelName(e.target.value)} />
        {!isConnected && <Button onClick={handleConnectClick}>
          Connect to Twitch
        </Button>}
        {isConnected && <Button onClick={handleDisconnectClick}>
          Disconnect from Twitch
        </Button>}
    </>
  )
}
