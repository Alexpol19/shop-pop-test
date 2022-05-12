import React from 'react';
import './ChatActionsAdditional.css'
import {ReactComponent as FlowSVG} from '../../images/flow.svg';
import {ReactComponent as EmojiSVG} from '../../images/emoji.svg';
import {ReactComponent as AttachmentSVG} from '../../images/attachment.svg';
import {ReactComponent as SendSVG} from '../../images/send.svg';

const ChatActionsAdditional = ({
  sendMessage,
}) => {
  return (
    <div className="additional-actions">
      <div className="additional-actions__icons">
        <div className="additional-actions__icon-btn">
          <FlowSVG />
        </div>
        <div className="additional-actions__icon-btn">
          <EmojiSVG />
        </div>
        <div className="additional-actions__icon-btn">
          <AttachmentSVG />
        </div>
      </div>
      <button className="additional-actions__send" onClick={sendMessage}>
        <span>Send message</span>
        <SendSVG />
      </button>
    </div>
  )
}

export default ChatActionsAdditional;