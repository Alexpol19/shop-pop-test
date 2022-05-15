import { timeDifference } from "../constants/messages"

export const separateToChunksByTime = (messages) => {
  const chunks = []
  if(messages && messages.length) {
    let chunkIndex = 0
    let lastReceivedTime = 0
    let lastDifferenceTime = 0

    for(const message of messages) {
      if(message && message.received_at) {
        const receivedTime = new Date(message.received_at).getTime()
        if(lastReceivedTime && lastDifferenceTime) {
          if(lastDifferenceTime - receivedTime <= 0) {
            chunkIndex++
          }
        }

        if(!chunks[chunkIndex]) {
          chunks[chunkIndex] = []
        }

        chunks[chunkIndex].push(message)

        // set new global vars
        lastReceivedTime = receivedTime
        lastDifferenceTime = new Date(receivedTime + timeDifference).getTime()
      }
    }
  }

  return chunks
}

export const separateToChunksByOwner = (messages) => {
  const chunks = []
  if(messages && messages.length) {
    let chunkIndex = 0
    let lastSender = ''

    for(const message of messages) {
      if(message && message.sender) {
        if(lastSender && lastSender !== message.sender) {
          chunkIndex++
        }

        if(!chunks[chunkIndex]) {
          chunks[chunkIndex] = []
        }

        chunks[chunkIndex].push(message)
      }

      lastSender = message.sender
    }
  }

  return chunks
}