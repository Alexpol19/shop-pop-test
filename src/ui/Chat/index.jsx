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
    currentConversationMessages,
    sendMessage,
    currentMessage,
    setCurrentMessage,
    loadingConversations,
    loadingMessages,
    sentMessageLoading,
  } = useContext(InboxContext);

  return (
    <div className="chat-component">
      <div className="chat-component__top">
        <ChatHeader
          loading={loadingConversations}
          userName={getUserName(currentConversation)}
        />
      </div>
      <div className="chat-component__content">
        <ChatContent
          loading={loadingConversations || loadingMessages}
          sentMessageLoading={sentMessageLoading}
          messages={currentConversationMessages}
        />
      </div>
      <div className="chat-component__bottom">
        <ChatActions
          loading={sentMessageLoading || loadingConversations || loadingMessages}
          currentMessage={currentMessage}
          sendMessage={sendMessage}
          setCurrentMessage={setCurrentMessage}
        />
      </div>
    </div>
  )
}

export default Chat;