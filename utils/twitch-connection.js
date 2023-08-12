import tmi from 'tmi.js'

export const getTwitchClient = (channel) => {
  const client = new tmi.Client({
    connection: {
      secure: true,
      reconnect: true,
    },
    channels: [channel],
  })
  return client
}

export const connect = (client) => {
  client.connect()
}

export const disconnect = (client) => {
  client.disconnect()
}

export const onMessage = (client, callback) => {
  client.on('message', callback)
}

export const removeMessageListener = (client, callback) => {
  client.removeListener("message", callback)
}