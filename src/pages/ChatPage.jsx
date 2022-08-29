import React from 'react'
import NavHeader from '../components/NavHeader'
import ChatList from '../components/ChatList'
import Divider from '@mui/material/Divider';
import SendChat from '../components/SendChat';

export default function ChatPage() {

  return (
    <div className="" data-testid="chat-page">

      <div>
        <header>
          <NavHeader />
        </header>

        <main>
            <div className="absolute w-full bottom-20" style={{height: "770px", overflowX: "hidden", overflowY: "scroll"}} >
              <ChatList />
            </div>
        </main>

        <Divider className="mb-10"  />

        <footer className="fixed bottom-0 left-0 flex items-center justify-center w-full h-20 border-t-2 border-white ">
               <SendChat /> 
        </footer>
    </div>

    </div>
  )
}
