import React, { createRef, useEffect, useMemo } from 'react';
import './ChatContent.css'
import SimpleBar from 'simplebar-react';
import { separateToChunksByTime } from '../../utils/messages';
import ChatBubblesTimeChunk from '../ChatBubblesTimeChunk';
import uniqid from 'uniqid'
import Skeleton from 'react-loading-skeleton';

const ChatContent = ({messages, loading, sentMessageLoading,}) => {
  const scrollableNodeRef = createRef();
  const messageChunks = useMemo(() => separateToChunksByTime(messages), [messages])
  
  useEffect(() => {//Not best - because scrolling if is newMessage but my scoll position not at bottom
    if(messages && messages.length && scrollableNodeRef && scrollableNodeRef.current) {
      scrollableNodeRef.current.scrollTo({left: 0, top: scrollableNodeRef.current.scrollHeight, behavior: "smooth"})
    }
  }, [messages, sentMessageLoading])
  return (
    <div className="chat-content">
      <SimpleBar
        scrollableNodeProps={{ ref: scrollableNodeRef }}
        forceVisible="y"
        autoHide={true}
      >
        <div className="chat-content__list">
          {!loading ? (
            <>
              {messageChunks.length ? 
                messageChunks.map((chunk, i) => (
                  <ChatBubblesTimeChunk
                    key={uniqid()}
                    messages={chunk}
                    loading={sentMessageLoading}
                    isLast={i === messageChunks.length - 1}
                  />
                )
              ) : <p>Don't have any message here</p>}
            </>
          ) : (
            <div className="chat-content__loader">
              <Skeleton
                count={3}
                style={{
                  width: 255,
                  marginLeft: 36,
                  height: 35,
                  background: '#F5F5F5'
                }}
              />
              <Skeleton
                style={{
                  width: 28,
                  marginTop: -26,
                  height: 28,
                  background: '#F5F5F5',
                  borderRadius: '50%',
                  display: 'block'
                }}
              />
            </div>
          )
        }
        </div>
      </SimpleBar>
    </div>
  )
}

export default ChatContent;