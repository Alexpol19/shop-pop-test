import { createContext } from 'react'

function noop() { }

export const InboxContext = createContext({
  loadingConversations: false,
  loadingMessages: false,
  sentMessageLoading: false,
  conversations: [],
  fetchConversations: noop,
  setConversations: noop,

  currentConversation: null,
  currentConversationMessages: [],
  getChat: noop,

  currentMessage: '',
  getDraftMessageByChatId: noop,
  setCurrentMessage: noop,
  
  sendMessage: noop,
})