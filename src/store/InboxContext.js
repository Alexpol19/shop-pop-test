import { createContext } from 'react'

function noop() { }

export const InboxContext = createContext({
  conversations: [],
  fetchConversations: noop,
  setConversations: noop,

  currentConversation: null,
  setCurrentConversationById: noop,

  conversationDraftMessages: {},
  setConversationDraftMessage: noop,
  
  sendMessage: noop,

  // temporar. remove after drafts implementing
  currentMessage: '',
  setCurrentMessage: noop,
})