import React, { useContext, useEffect } from 'react';
import { InboxContext } from '../store/InboxContext';
import InboxUI from '../ui/InboxUI';
import Page from '../ui/Page';

const Inbox = () => {
  const { fetchConversations } = useContext(InboxContext);

  useEffect(() => {
    fetchConversations()
  }, [])
  return (
    <Page>
      <InboxUI />
    </Page>
  )
}

export default Inbox;