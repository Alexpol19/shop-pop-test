import React from 'react';
import Chat from '../Chat';
import Conversations from '../Conversations';
import './InboxUI.css'

const InboxUI = () => {
  return (
    <div className="inbox-page-content">
      <div className="inbox-page-content__left">
        <Conversations />
      </div>
      <div className="inbox-page-content__right">
        <Chat />
      </div>
    </div>
    )
  }

export default InboxUI;