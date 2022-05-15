import React, { useContext, useEffect } from 'react';
import './Conversations.css'
import SimpleBar from 'simplebar-react';
import Conversation from '../Conversation';
import { InboxContext } from '../../store/InboxContext';
import Skeleton from 'react-loading-skeleton';
import { useNavigate, useParams } from 'react-router-dom';

const Conversations = () => {
  let { chatId } = useParams();
  let navigate = useNavigate();

  const {
    conversations,
    currentConversation,
    getChat,
    loadingConversations,
    getDraftMessageByChatId,
  } = useContext(InboxContext);

  const setConversation = (id) => {//only change url
    navigate(`/inbox/${id}`);
  }

  const getIsActiveConversation = (item) => item && currentConversation && item.id === currentConversation.id


  useEffect(() => {//reacts to changing url, or first loading
    if(!loadingConversations && conversations && conversations.length) {
      if(!chatId) {
        if(conversations[0] && conversations[0].id) {
          setConversation(conversations[0].id)
        }
      } else if(chatId && ((currentConversation && chatId !== currentConversation.id) || !currentConversation)) {
        getChat(chatId)
      }
    }
  }, [loadingConversations, chatId, conversations, currentConversation])
  return (
    <div className="conversations">
      <SimpleBar forceVisible="y" autoHide={true}>
        <div className="conversations__list">
          {!loadingConversations ? (
            <>
              {conversations && conversations.length ? conversations.map(item => (
                <Conversation
                  item={item}
                  key={item.id}
                  onClick={() => setConversation(item.id)}
                  isActive={getIsActiveConversation(item)}
                  getDraftMessage={getDraftMessageByChatId}
                />
              )) : <p>Don't have any conversation</p>}
            </>
          ) : <Skeleton
            count={3}
            style={{
              width: 'calc(100% - 16px)',
              marginLeft: 8,
              marginRight: 8,
              height: 48,
              marginTop: 8
            }}
          />
        }
        </div>
      </SimpleBar>
    </div>
  )
}

export default Conversations;