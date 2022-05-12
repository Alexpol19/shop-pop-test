import axios from 'axios';

export const getConversations = () => {
  return axios.get('data.json')
    .then(res => res.data.conversations)
    .catch(err => err)
}

// here need to be:

// getConversationById

// sendMessageByChatId
