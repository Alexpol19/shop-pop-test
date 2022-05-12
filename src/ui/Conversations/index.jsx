import React, { useContext } from 'react';
import './Conversations.css'
import SimpleBar from 'simplebar-react';
import Conversation from '../Conversation';
import { InboxContext } from '../../store/InboxContext';

const Conversations = () => {
  const {
    conversations,
    currentConversation,
    setCurrentConversationById
  } = useContext(InboxContext);

  const setConversation = (id) => {
    setCurrentConversationById(id)
  }

  const getIsActiveConversation = (item) => item && currentConversation && item.id === currentConversation.id
  return (
    <div className="conversations">
      <SimpleBar forceVisible="y" autoHide={true}>
        <div className="conversations__list">
          {conversations && conversations.length ? conversations.map(item => (
            <Conversation
              item={item}
              key={item.id}
              onClick={() => setConversation(item.id)}
              isActive={getIsActiveConversation(item)}
            />
          )) : <p>Don't have any conversation</p>}
        </div>
      </SimpleBar>
    </div>
  )
}

export default Conversations;