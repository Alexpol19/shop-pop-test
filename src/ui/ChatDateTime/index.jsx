import React from 'react';
import { formatDate } from '../../utils/date';
import './ChatDateTime.css'

const ChatDateTime = ({date}) => {
  return (
    <div className="chat__date-time">
      <p>{formatDate(date)}</p>
    </div>
  )
}

export default ChatDateTime;