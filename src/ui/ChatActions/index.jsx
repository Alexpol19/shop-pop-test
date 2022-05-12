import React from 'react';
import ChatActionsAdditional from '../ChatActionsAdditional';
import './ChatActions.css'

const ChatActions = ({
  currentMessage,
  sendMessage,
  setCurrentMessage,
}) => {
  const onChange = (e) => {
    setCurrentMessage(e.target.value)
  }
  return (
    <div className="chat-actions">
      <div className="chat-actions__message">
        <textarea
          value={currentMessage}
          placeholder="Write a reply..."
          onChange={onChange}
        />
      </div>
      <div className="chat-actions__bottom">
        <ChatActionsAdditional sendMessage={sendMessage} />
      </div>
    </div>
  )
}

export default ChatActions;