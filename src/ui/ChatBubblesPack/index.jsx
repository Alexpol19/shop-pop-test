import React from 'react';
import './ChatBubblesPack.css'
import ChatBubble from '../ChatBubble';
import {ReactComponent as UserSVG} from '../../images/user-empty-state.svg';

const ChatBubblesPack = ({items, isOwnerMesages}) => {
  const isFirst = (i) => {
    if(items.length > 1 && i === 0) return true
  }

  const isCenter = (i) => {
    if(items.length > 2 && i !== 0 && i !== items.length -1) return true
  }

  const isLast = (i) => {
    if(items.length > 1 && i === items.length -1) return true
  }

  const isSingle = () => {
    if(items.length === 1) return true
  }
  return (
    <div
      className={`chat-bubbles__pack ${!isOwnerMesages ? "chat-bubbles__pack-left" : "chat-bubbles__pack-right"}`}
    >
      {items.map((item, i)=> (
        <ChatBubble
          item={item}
          key={item.id}
          isOwnerMesage={isOwnerMesages}
          isSingle={isSingle()}
          isFirst={isFirst(i)}
          isCenter={isCenter(i)}
          isLast={isLast(i)}
        />
      ))}
      <div className="chat-bubbles__pack-logo">
        <UserSVG />
      </div>
    </div>
  )
}

export default ChatBubblesPack;