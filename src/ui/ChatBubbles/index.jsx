import React from 'react';
import ChatBubblesPack from '../ChatBubblesPack';
import ChatDateTime from '../ChatDateTime';
import './ChatBubbles.css'

const ChatBubbles = ({items}) => {
  return (
    <div className="chat-bubbles">
      <ChatDateTime date={'2021-06-15T15:44:28.677Z'} />
      {/* TO DO - here will be pack of messages by Owner */}
      {/* {items.map(item=> (
        <ChatBubblesPack
          item={item}
          isOwn={item === 0  || item === 1}
          key={item.id}
        />
      ))} */}
      <ChatBubblesPack
        items={items}
      />
      <ChatBubblesPack
        items={items}
        isOwnerMesages
      />
    </div>
  )
}

export default ChatBubbles;