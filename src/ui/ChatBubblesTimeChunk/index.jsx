import React, { useMemo } from 'react';
import { separateToChunksByOwner } from '../../utils/messages';
import ChatBubblesPack from '../ChatBubblesPack';
import ChatDateTime from '../ChatDateTime';
import './ChatBubblesTimeChunk.css'
import uniqid from 'uniqid'

const ChatBubblesTimeChunk = ({messages, loading, isLast,}) => {

  const getFirstMessageTime = useMemo(() => {
    if(messages && messages.length && messages[0] && messages[0].received_at) {
      return messages[0].received_at
    } else return 0
  }, [messages])

  const messageChunks = useMemo(() => separateToChunksByOwner(messages), [messages])

  const getMessagesOwner = (items) => {
    if(items && items.length && items[0] && items[0].sender) {
      return items[0].sender
    } else return ''
  }

  const isUserOwner = (items) => getMessagesOwner(items) === 'business'
  return (
    <div className="chat-bubbles">
      <ChatDateTime date={getFirstMessageTime} />
      {messageChunks.length ? 
        messageChunks.map((chunk, i) => (
          <ChatBubblesPack
            key={uniqid()}
            messages={chunk}
            isUserOwner={isUserOwner(chunk)}
            isLastEl={isLast && (i === messageChunks.length - 1)}
            loading={loading}
          />
        )
      ) : <></>}
    </div>
  )
}

export default ChatBubblesTimeChunk;