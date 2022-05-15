import React from 'react';
import './ChatBubblesPack.css'
import ChatBubble from '../ChatBubble';
import {ReactComponent as UserSVG} from '../../images/user-empty-state.svg';
import { ThreeDots } from 'react-loader-spinner';

const ChatBubblesPack = ({messages, isUserOwner, loading, isLastEl}) => {
  const isFirst = (i) => {
    if(messages.length > 1 && i === 0) return true
  }

  const isCenter = (i) => {
    if(messages.length > 2 && i !== 0 && i !== messages.length -1) return true
  }

  const isLast = (i) => {
    if(messages.length > 1 && i === messages.length -1) return true
  }

  const isSingle = () => {
    if(messages.length === 1) return true
  }
  return (
    <div
      className={`chat-bubbles__pack ${!isUserOwner ? "chat-bubbles__pack-left" : "chat-bubbles__pack-right"}`}
    >
      {messages.map((item, i)=> (
        <ChatBubble
          item={item}
          key={item.id}
          isOwnerMesage={isUserOwner}
          isSingle={isSingle()}
          isFirst={isFirst(i)}
          isCenter={isCenter(i)}
          isLast={isLast(i)}
        />
      ))}
      {isLastEl && isUserOwner && loading ? (
        <div className="chat-bubble-loader-wrapper">
          <ThreeDots
            width="35"
            height={20}
            strokeWidth="1"
            animationDuration="3"
          />
        </div>
      ) : null}
      <div className="chat-bubbles__pack-logo">
        <UserSVG />
      </div>
    </div>
  )
}

export default ChatBubblesPack;