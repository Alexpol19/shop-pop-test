import React from 'react';
import './ChatHeader.css'
import {ReactComponent as UserSVG} from '../../images/user-empty-state.svg';
import Skeleton from 'react-loading-skeleton';

const ChatHeader = ({userName, loading,}) => (
  <div className="chat-header">
    <div className="chat-header__user-info">
      {loading ? (
        <>
        <Skeleton
          style={{
            width: 34,
            height: 34,
            background: '#F5F5F5',
            borderRadius: '50%',
          }}
        />
          <Skeleton style={{width: 100, marginLeft: 8, height: 17}} />
        </>
      ) : (
        <>
          <div className="chat-header__logo-box">
            <UserSVG />
          </div>
          <span className="chat-header__user-name">{userName}</span>
        </>
      )}
    </div>
  </div>
)

export default ChatHeader;