import { useState, useEffect } from 'preact/hooks'
import './app.css'
import { getTwitchClient, connect, onMessage, disconnect } from '../utils/twitchConnection'
import { Button } from './components/button'

export function App() {
  const [channelName, setChannelName] = useState('rothiotome')
  const [twitchClient, setTwitchClient] = useState(null)
  const [isConnected, setIsConnected] = useState(false)

  const [currentMessage, setCurrentMessage] = useState('')
  const [currentNumber, setCurrentNumber] = useState(0)
  const [currentCombo, setCurrentCombo] = useState(0)
  const [currentUser, setCurrentUser] = useState('')

  const handleConnectClick = () => {
    const client = getTwitchClient(channelName)
    connect(client)
    setTwitchClient(client)
    setIsConnected(true)
    console.log('Connected')
  }

  const handleDisconnectClick = () => {
    disconnect(twitchClient)
    setIsConnected(false)
    console.log('Disconnected')
  }

  useEffect(() => {
    if (!isConnected) return

    onMessage(twitchClient, (channel, user, message, self) => {
      console.log(user.username, message)
      setCurrentMessage(message)
      setCurrentNumber(currentNumber + 1)
      setCurrentCombo(currentCombo + 1)
      setCurrentUser(user.username)
    })
  }, [isConnected, currentMessage])

  return (
    <>
      <h1>Numerica Combo Game</h1>
      <input type="text" value={channelName} onChange={(e) => setChannelName(e.target.value)} />
      <div>Current Message: {currentMessage}</div>
      <div>Current Number: {currentNumber}</div>
      <div>Current Combo: {currentCombo}</div>
      <div>Current User: {currentUser}</div>
        {!isConnected && <Button onClick={handleConnectClick}>
          Connect to Twitch
        </Button>}
        {isConnected && <Button onClick={handleDisconnectClick}>
          Disconnect from Twitch
        </Button>}
    </>
  )
}
