import { useState, useEffect } from 'preact/hooks'
import './app.css'
import { getTwitchClient, connect, onMessage, disconnect } from '../utils/twitchConnection'
import { Game } from './components/game'
import { InitialConfiguration } from './components/initial-configuration'

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
    setCurrentMessage('')
    setCurrentNumber(0)
    setCurrentCombo(0)
    setCurrentUser('')
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
    <main>
      <h1>Numerica Combo Game</h1>
      <div>Current Message: {currentMessage}</div>
      <div>Current Number: {currentNumber}</div>
      <div>Current Combo: {currentCombo}</div>
      <div>Current User: {currentUser}</div>
      {!isConnected && <InitialConfiguration channelName={channelName} setChannelName={setChannelName} handleConnectClick={handleConnectClick} />}
      {isConnected && <Game value={currentNumber} handleDisconnectClick={handleDisconnectClick} />}
    </main>
  )
}
