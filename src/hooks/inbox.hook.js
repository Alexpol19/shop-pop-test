import {
  useEffect,
  useState
} from 'react'
import { getConversations } from '../api'
import uniqid from 'uniqid'

export const useInbox = () => {
  const [conversations, setConversations] = useState([])
  const [currentConversation, setCurrentConversation] = useState(null)
  const [currentMessage, setCurrentMessage] = useState('')//remove when implement draft messages
  const [draftConversationMessages, setDraftConversationMessages] = useState([])

  const fetchConversations = () => {
    getConversations().then(data => {
      setConversations(data)
      if(data && data.length) {
        setCurrentConversation(data[0])
      }
    })
  }

  const sendMessage = () => {
    const newMessage = {
      "id": uniqid(),
      "sender": "business",
      "status": "sent",
      body: currentMessage,
      "received_at": null,
      "queued_at": null,
      "sent_at": '2021-06-15T15:44:28.662Z',
      "delivered_at": null,
      "read_at": null
    }
    setCurrentConversation({
      ...currentConversation,
      messages: [...currentConversation.messages, newMessage]
    })
    setCurrentMessage('')
  }

  const setCurrentConversationById = (id) => {
    if(conversations && conversations.length) {
      const mathces = conversations.filter(item=> item.id === id)
      setCurrentConversation(mathces.length ? mathces[0] : null)
    }
  }

  // TODO: In future
  const setDraftConversationMessage = () => {//here change draft message by conversation id

  }

  const getDraftConversationMessages = () => {//from localStorage
    // setDraftConversationMessages([])
  }

  useEffect(() => {
    getDraftConversationMessages()
  }, [])

  return {
    conversations,
    fetchConversations,
    setConversations,
    currentConversation,
    setCurrentConversationById,
    draftConversationMessages,
    setDraftConversationMessage,
    sendMessage,
    // temporar. remove after implementing draft
    currentMessage,
    setCurrentMessage,
  }
}