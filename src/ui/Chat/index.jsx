import React, { useContext } from 'react';
import { InboxContext } from '../../store/InboxContext';
import { getUserName } from '../../utils/user';
import ChatActions from '../ChatActions';
import ChatContent from '../ChatContent';
import ChatHeader from '../ChatHeader';
import './Chat.css'

const Chat = () => {
  const {
    currentConversation,
    sendMessage,
    currentMessage,
    setCurrentMessage
  } = useContext(InboxContext);

  return (
    <div className="chat-component">
      <div className="chat-component__top">
        <ChatHeader userName={getUserName(currentConversation)} />
      </div>
      <div className="chat-component__content">
        <ChatContent
          messages={currentConversation ? currentConversation.messages : []}
        />
      </div>
      <div className="chat-component__bottom">
        <ChatActions
          currentMessage={currentMessage}
          sendMessage={sendMessage}
          setCurrentMessage={setCurrentMessage}
        />
      </div>
    </div>
  )
}

export default Chat;