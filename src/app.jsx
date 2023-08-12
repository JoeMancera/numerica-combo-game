import { useEffect } from 'preact/hooks'
import { useRoute } from "wouter"

import './app.css'
import { onMessage, removeMessageListener } from '../utils/twitch-connection'
import { Game } from './components/game'
import { InitialConfiguration } from './components/initial-configuration'
import { useNumerica } from './hooks/use-numerica'
import { setHighScore, isMessageNumeric, messageToNumber } from '../utils/numerica-logic'

const isDebugMode = false

export function App() {
  const [match, params] = useRoute("/channel/:channelName")
  
  const {
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
    setCurrentUser,
  } = useNumerica(params?.channelName)

  const handleNewMessage = (channel, user, message, self) => {
    console.log(user.username, message)
    setCurrentMessage(message)

    if(!isMessageNumeric(message)) return
    
    const hit = messageToNumber(message)
    if(hit === currentNumber + 1){
      setCurrentNumber(hit)
      setCurrentUser(user.username)
      setHighScore(currentNumber + 1, user.username)
    }
  }

  useEffect(() => {
    if (!twitchClient) return
    onMessage(twitchClient, handleNewMessage)
    return () => {
      removeMessageListener(twitchClient, handleNewMessage)
    }
  }, [twitchClient, handleNewMessage])

  return (
    <main classNam="">
      {isDebugMode && <>
        <div>Current Message: {currentMessage}</div>
        <div>Current Number: {currentNumber}</div>
        <div>Current Combo: {currentCombo}</div>
        <div>Current User: {currentUser}</div>
      </>}
      {!isConnected && <InitialConfiguration channelName={channelName} setChannelName={setChannelName} handleConnectClick={handleConnectClick} />}
      {isConnected && <Game value={currentNumber} user={currentUser} showStopGame={!match} handleDisconnectClick={handleDisconnectClick} combo={currentCombo} />}
    </main>
  )
}
