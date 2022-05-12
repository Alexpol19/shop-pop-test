import React from 'react';
import './ChatBubble.css'

const ChatBubble = ({
  item, 
  isOwnerMesage,
  isFirst,
  isCenter,
  isLast,
  isSingle,
}) => {
  const getClassName = () => {
    if(isFirst) return 'chat-bubble__first'
    if(isCenter) return 'chat-bubble__center'
    if(isLast) return 'chat-bubble__last'
    if(isSingle) return 'chat-bubble__single'
  }
  return (
    <div className={`chat-bubble ${!isOwnerMesage ? 'chat-bubble__left' : 'chat-bubble__right'} ${getClassName()}`}>
      <p>{item.body}</p>
    </div>
  )
}

export default ChatBubble;