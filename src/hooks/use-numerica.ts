import tmi from 'tmi.js'
import { useEffect, useState } from 'preact/hooks'
import { useLocation } from "wouter"
import { getTwitchClient, connect, disconnect } from '../../utils/twitch-connection'


export const useNumerica = (channel?: string)  => {
  const [_, setLocation] = useLocation()
  const [channelName, setChannelName] = useState<string>(channel ?? 'rothiotome')
  const [twitchClient, setTwitchClient] = useState<tmi.Client | null>(null)

  const [currentNumber, setCurrentNumber] = useState(0)
  const [currentCombo, setCurrentCombo] = useState(1)
  const [currentUser, setCurrentUser] = useState<string | null>(null)
  const [userGameOver, setUserGameOver] = useState<string | null>(null)

  const handleConnectClick = () => {
    const client = getTwitchClient(channelName)
    connect(client)
    setTwitchClient(client)
    console.log('Connected')
  }

  const handleDisconnectClick = () => {
    setLocation('/')
    disconnect(twitchClient)
    setCurrentNumber(0)
    setCurrentCombo(1)
    setCurrentUser('')
    setUserGameOver(null)
    setTwitchClient(null)
    console.log('Disconnected')
  }

  useEffect(() => {
    if (channel) {
      const client = getTwitchClient(channelName)
      connect(client)
      setTwitchClient(client)
      console.log('Connected')
    }
  }, [channel])

  return {
    channelName,
    twitchClient,
    currentNumber,
    currentCombo,
    currentUser,
    userGameOver,
    handleDisconnectClick,
    handleConnectClick,
    setChannelName,
    setCurrentNumber,
    setCurrentCombo,
    setCurrentUser,
    setUserGameOver,
  }
}