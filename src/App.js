import { useInbox } from './hooks/inbox.hook';
import Inbox from './pages/Inbox';
import { InboxContext } from './store/InboxContext';
import 'simplebar/dist/simplebar.min.css'

function App() {
  const {
    conversations,
    fetchConversations,
    setConversations,
    currentConversation,
    setCurrentConversationById,
    conversationDraftMessages,
    setConversationDraftMessage,
    sendMessage,
    currentMessage,
    setCurrentMessage,
  } = useInbox()
  
  return (
    <div className="app">
      <InboxContext.Provider value={{
        conversations,
        fetchConversations,
        setConversations,
        currentConversation,
        setCurrentConversationById,
        conversationDraftMessages,
        setConversationDraftMessage,
        sendMessage,
        currentMessage,
        setCurrentMessage,
      }}>
        <Inbox />
      </InboxContext.Provider>
    </div>
  );
}

export default App;
