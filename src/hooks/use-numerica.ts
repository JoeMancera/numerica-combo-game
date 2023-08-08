import { useState } from 'preact/hooks'
import { getTwitchClient, connect, disconnect } from '../../utils/twitchConnection'


export const useNumerica = () => {
  const [channelName, setChannelName] = useState('rothiotome')
  const [twitchClient, setTwitchClient] = useState({})
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

  return {
    channelName,
    twitchClient,
    isConnected,
    currentMessage,
    currentNumber,
    currentCombo,
    currentUser,
    handleDisconnectClick,
    handleConnectClick,
    setCurrentMessage,
    setChannelName,
    setCurrentNumber,
    setCurrentCombo,
    setCurrentUser
  }
}