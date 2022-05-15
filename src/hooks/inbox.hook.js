import {
  useEffect,
  useState
} from 'react'
import {
  getConversations,
  getMessages
} from '../api'
import uniqid from 'uniqid'
import { withTimeout } from '../utils/api'
import { inboxDraftsStorageName } from '../constants/localStorage'
import { localStorageGet, localStorageSet } from '../utils/localStorage'

export const useInbox = () => {
  const [loadingConversations, setLoadingConversations] = useState(false)
  const [loadingMessages, setLoadingMessages] = useState(false)
  const [sentMessageLoading, setSentMessageLoading] = useState(false)
  const [conversations, setConversations] = useState([])
  const [currentConversation, setCurrentConversation] = useState(null)
  const [currentConversationMessages, setCurrentConversationMessages] = useState([])
  const [draftConversationMessages, setDraftConversationMessages] = useState(null)
  const [currentMessage, setCurrentMessage] = useState('')

  const fetchConversations = () => {
    setLoadingConversations(true)
    return getConversations()
      .then(data => {
        setConversations(data)
        return data
      })
      .finally(() => {
        setLoadingConversations(false)
      })
  }

  const fetchMessages = (chatId) => {
    setLoadingMessages(true)
    return getMessages(chatId)
      .then(data => {
        if (data) {
          setCurrentConversationMessages(data)
        }
        return data
      })
      .finally(() => {
        setLoadingMessages(false)
      })
  }

  const getChat = (chatId) => {
    let filtered = conversations && conversations.length ? conversations.filter(item => item.id === chatId) : []
    setCurrentConversation(filtered && filtered.length ? filtered[0] : null)
    fetchMessages(chatId)
  }

  const sendMessage = async () => {
    // Here can't make without server.
    // Because if I sent message - need to sent in the json file?
    // If I save locally - then I make request to Messages/Conversations and it rewrites
    
    // NEEd to send message by chat Id
    // Than get messages
    
    // This fake save - only before change chat

    if(currentMessage.trim().length) {
      setSentMessageLoading(true)

      const newMessage = {
        "id": uniqid(),
        "sender": "business",
        "status": "sent",
        body: currentMessage,
        "received_at": (new Date()).toString(),
        "queued_at": null,
        "sent_at": '2021-06-15T15:44:28.662Z',
        "delivered_at": null,
        "read_at": null
      }

      const resMessages = await withTimeout([...currentConversationMessages, newMessage], 1000)
      
      setCurrentConversationMessages(resMessages)
      setDraftConversationMessage('')

      setSentMessageLoading(false)
    }
  }

  const setDraftConversationMessage = (value) => { //here change draft message by conversation id
    setCurrentMessage(value)

    if(draftConversationMessages && currentConversation && currentConversation.id) {
      const newDraftMessages = {
        ...draftConversationMessages,
        [currentConversation.id]: value
      }
      setDraftConversationMessages(newDraftMessages)
      localStorageSet(inboxDraftsStorageName, newDraftMessages)
    }
  }

  const getDraftConversationMessages = () => { //from localStorage
    const data = localStorageGet(inboxDraftsStorageName)
    setDraftConversationMessages(data)
    getCurrentConversationMessageFromDrafts(data, currentConversation)
  }

  const getCurrentConversationMessageFromDrafts = (draftMessages, conversation) => {
    if(draftMessages && conversation && conversation.id && draftMessages[currentConversation.id]) {
      setCurrentMessage(draftMessages[conversation.id])
    } else {
      setCurrentMessage('')
    }
  }

  const getDraftMessageByChatId = (chatId) => {
    const filtered = conversations && conversations.length ? conversations.filter(item => item.id === chatId) : []
    const conversation = filtered.length ? filtered[0] : null

    if(draftConversationMessages && conversation && conversation.id && draftConversationMessages[conversation.id]) {
      return draftConversationMessages[conversation.id]
    } else {
      return ''
    }
  }

  useEffect(() => {
    if(!draftConversationMessages) {
      getDraftConversationMessages()
    } else if(currentConversation){
      getCurrentConversationMessageFromDrafts(draftConversationMessages, currentConversation)
    }
  }, [currentConversation, draftConversationMessages])

  return {
    loadingConversations,
    loadingMessages,
    sentMessageLoading,
    conversations,
    fetchConversations,
    setConversations,
    currentConversation,
    currentConversationMessages,
    getChat,
    currentMessage,
    setCurrentMessage: setDraftConversationMessage,
    sendMessage,
    getDraftMessageByChatId,
  }
}