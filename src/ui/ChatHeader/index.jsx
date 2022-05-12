import React from 'react';
import './ChatHeader.css'
import {ReactComponent as UserSVG} from '../../images/user-empty-state.svg';

const ChatHeader = ({userName}) => (
  <div className="chat-header">
    <div className="chat-header__user-info">
      <div className="chat-header__logo-box">
        <UserSVG />
      </div>
      <span className="chat-header__user-name">{userName}</span>
    </div>
  </div>
)

export default ChatHeader;