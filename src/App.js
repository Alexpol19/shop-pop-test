import { useInbox } from './hooks/inbox.hook';
import Inbox from './pages/Inbox';
import { InboxContext } from './store/InboxContext';
import 'simplebar/dist/simplebar.min.css'
import 'react-loading-skeleton/dist/skeleton.css'
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  Navigate
} from "react-router-dom";

function App() {
  const {
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
    setCurrentMessage,
    sendMessage,
    getDraftMessageByChatId,
  } = useInbox()
  
  return (
    <div className="app">
      <Router>
        <InboxContext.Provider value={{
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
          setCurrentMessage,
          sendMessage,
          getDraftMessageByChatId,
        }}>
          <Switch>
            <Route
              path="inbox"
            >
              <Route index element={<Inbox />} />
              <Route path=":chatId" element={<Inbox />} />
            </Route>
            <Route
              path="*"
              element={<Navigate to="/inbox" />}
            />
          </Switch>
        </InboxContext.Provider>
      </Router>
    </div>
  );
}

export default App;
