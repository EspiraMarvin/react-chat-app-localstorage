import React from 'react'
import ChatList from '../components/ChatList'
import Divider from '@mui/material/Divider';
import SendChat from '../components/SendChat';


export default function ChatPage() {
  return (
    <div className="shadow-xl">
      
        <div className="flex items-center justify-center p-4 text-xl font-bold md:p-6">Chat</div>

        <div className="absolute w-full px-2 bottom-1 lg:px-4">

          <ChatList />

          <Divider />

          <SendChat />
          
        </div>        
    </div>
  )
}
