import axios from 'axios';
import { withTimeout } from '../utils/api';

export const getConversations = () => {
  return axios.get('http://localhost:3000/data.json')
    .then(res => withTimeout(res.data.conversations, 500))
    .catch(err => err)
}

export const getMessages = (chatId) => {
  return axios.get('http://localhost:3000/data.json')
    .then(res => {
      let resData
      if(res && res.data && res.data.conversationsWithMessages && res.data.conversationsWithMessages.length) {
        const items = res.data.conversationsWithMessages.filter(item => item.id === chatId)
        resData = items && items.length && items[0].messages ? items[0].messages : []
      } else {
        resData = []
      }
      return withTimeout(resData, 500)
    })
    .catch(err => err)
}

// here need to be:

// sendMessageByChatId
