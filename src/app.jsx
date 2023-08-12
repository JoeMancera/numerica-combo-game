import { useEffect } from 'preact/hooks'
import { useRoute } from "wouter"

import './app.css'
import { onMessage, removeMessageListener } from '../utils/twitch-connection'
import { Game } from './components/game'
import { InitialConfiguration } from './components/initial-configuration'
import { useNumerica } from './hooks/use-numerica'
import { 
  setHighScore, 
  isMessageNumeric, 
  messageToNumber, 
  nextNumber, 
  isComboMessage,
  saveComboDate,
  isEndCombo,
  saveComboUser,
  isSamePreviousUserCombo
} from '../utils/numerica-logic'

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

    if(!isMessageNumeric(message)) {
      if(isComboMessage(message) && !isSamePreviousUserCombo(user.username)) {
        setCurrentCombo(currentCombo + 1)
        saveComboDate()
        saveComboUser(user.username)
      }
      return
    }
    
    const hit = messageToNumber(message)
    if(hit === nextNumber(currentNumber, currentCombo)){
      setCurrentNumber(hit)
      setCurrentUser(user.username)
      setHighScore(currentNumber + currentCombo, user.username)
      setUserGameOver(null)
      if(isEndCombo()) {
        setCurrentCombo(1)
      }
    } else {
      setCurrentNumber(0)
      setCurrentCombo(1)
      setCurrentUser('')
      setUserGameOver(user.username)
      saveComboUser('')
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
