import React from 'react';
import checkmark from '../../images/checkmark-large.svg';
import people from '../../images/people.svg';
import { getUserName } from '../../utils/user';
import './Conversation.css'

const Conversation = ({item, onClick, isActive}) => {
  const getUserChannel = () => {
    if(item && item.customer && item.customer.channel_address) {
      const channel = item.customer.channel_address.split(':')[0]

      switch(channel) {
        case 'whatsapp': return 'WhatsApp'
        default: return channel
      }
    }
    return 'Unknown'
  }

  const getLastMessage = () => {
    if(item && item.last_message && item.last_message.body) {
      return item.last_message.body
    }
  }

  return (
    <div className={`conversation ${isActive ? 'active' : ''}`} onClick={onClick}>
      <div className="conversation__header">
        <div className="conversation__info">
          <span className="conversation__name">
            {getUserName(item)}
          </span>
          <span className="conversation__separator">&nbsp;via&nbsp;</span>
          <span className="conversation__social">
            {getUserChannel()}
          </span>
        </div>
        <div className="conversation__time">just now</div>
      </div>
      <div className="conversation__message">
        <p>{getLastMessage()}</p>
        {/* <div className="conversation__actions">
          <button className="conversation__actions-btn conversation__actions-btn-info">
            <img src={checkmark} alt="conversation info" />
          </button>
          <button className="conversation__actions-btn conversation__actions-btn-accept">
            <img src={people} alt="conversation accept" />
          </button>
        </div> */}
      </div>
    </div>
  )
}

export default Conversation;