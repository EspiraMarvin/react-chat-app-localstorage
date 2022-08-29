import { useSelector } from "react-redux"
import AuthPage from "./pages/AuthPage";
import ChatPage from "./pages/ChatPage";

function App() {
  const isLoggedIn = useSelector((state) => state.users.isLoggedIn)
  return (
    <div>
      {isLoggedIn ?  <ChatPage /> :  <AuthPage /> }
    </div>
  );
}

export default App;
