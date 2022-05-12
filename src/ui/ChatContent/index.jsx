import React from 'react';
import './ChatContent.css'
import SimpleBar from 'simplebar-react';
import ChatBubbles from '../ChatBubbles';

const ChatContent = ({messages}) => {
  return (
    <div className="chat-content">
      <SimpleBar forceVisible="y" autoHide={true}>
        <div className="chat-content__list">
          {/* TO DO: Need to divivde message by parts(ex. at this Time we have this array of messages) */}
          {/* {messages.length ? messages.map(item => (
            <ChatBubbles item={item} key={item.id} />
          )) : <p>Don't have any message</p>} */}
          {messages.length ? (
            <ChatBubbles items={messages} />
          ) : <></>}
        </div>
      </SimpleBar>
    </div>
  )
}

export default ChatContent;