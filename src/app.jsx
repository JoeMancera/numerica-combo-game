import { useRoute } from "wouter"

import './app.css'
import { onMessage } from '../utils/twitch-connection'
import { Game } from './components/game'
import { InitialConfiguration } from './components/initial-configuration'
import { useNumerica } from './hooks/use-numerica'

const isDebugMode = false

export function App() {
  const [match, params] = useRoute("/channel/:channelName")
  console.log(match, params)
  
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
    setCurrentUser
  } = useNumerica({ channelName: params?.channelName, isConnect: match})

  if(isConnected){
    onMessage(twitchClient, (channel, user, message, self) => {
      console.log(user.username, message)
      setCurrentMessage(message)
      setCurrentNumber(currentNumber + 1)
      setCurrentCombo(currentCombo + 1)
      setCurrentUser(user.username)
    })
  }

  return (
    <main classNam="">
      {isDebugMode && <>
        <div>Current Message: {currentMessage}</div>
        <div>Current Number: {currentNumber}</div>
        <div>Current Combo: {currentCombo}</div>
        <div>Current User: {currentUser}</div>
      </>}
      {!isConnected && <InitialConfiguration channelName={channelName} setChannelName={setChannelName} handleConnectClick={handleConnectClick} />}
      {isConnected && <Game value={currentNumber} handleDisconnectClick={handleDisconnectClick} />}
    </main>
  )
}
