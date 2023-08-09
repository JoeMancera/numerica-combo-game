import { useEffect, useState } from 'preact/hooks'
import { useLocation } from "wouter"
import { getTwitchClient, connect, disconnect } from '../../utils/twitch-connection'


export const useNumerica = (channel?: string)  => {
  const [_, setLocation] = useLocation()
  const [channelName, setChannelName] = useState<string>(channel ?? 'rothiotome')
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
    setLocation('/')
    disconnect(twitchClient)
    setIsConnected(false)
    setCurrentMessage('')
    setCurrentNumber(0)
    setCurrentCombo(0)
    setCurrentUser('')
    console.log('Disconnected')
  }

  useEffect(() => {
    if (channel) {
      const client = getTwitchClient(channelName)
      connect(client)
      setTwitchClient(client)
      setIsConnected(true)
      console.log('Connected')
    }
  }, [])

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