import { useEffect } from 'preact/hooks'
import { useRoute } from "wouter"

import './app.css'
import { onMessage, removeMessageListener } from '../utils/twitch-connection'
import { Game } from './components/game'
import { InitialConfiguration } from './components/initial-configuration'
import { useNumerica } from './hooks/use-numerica'
import { setHighScore, isMessageNumeric, messageToNumber, nextNumber, isComboMessage } from '../utils/numerica-logic'

export function App() {
  const [match, params] = useRoute("/channel/:channelName")
  
  const {
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
  } = useNumerica(params?.channelName)

  const handleNewMessage = (channel, user, message, self) => {
console.log('handleNewMessage', message, self)
console.log(isMessageNumeric(message))
    if(!isMessageNumeric(message)) {
      if(isComboMessage(message)) {
        setCurrentCombo(currentCombo + 1)
      }
      return
    }
    
    const hit = messageToNumber(message)
    if(hit === nextNumber(currentNumber, currentCombo)){
      setCurrentNumber(hit)
      setCurrentUser(user.username)
      setHighScore(currentNumber + 1, user.username)
      setUserGameOver(null)
    } else {
      setCurrentNumber(0)
      setCurrentCombo(1)
      setCurrentUser('')
      setUserGameOver(user.username)
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
      {!twitchClient && <InitialConfiguration channelName={channelName} setChannelName={setChannelName} handleConnectClick={handleConnectClick} />}
      {twitchClient && (
        <Game 
          value={currentNumber} 
          user={currentUser} 
          showStopGame={!match} 
          combo={currentCombo} 
          userGameOver={userGameOver}
          handleDisconnectClick={handleDisconnectClick} 
        />)}
    </main>
  )
}
