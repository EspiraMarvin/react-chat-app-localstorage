import React from 'react'
import NavHeader from '../components/NavHeader'
import ChatList from '../components/ChatList'
import SendChat from '../components/SendChat';

export default function ChatPage() {

  return (
    <div data-testid="chat-page">

      <NavHeader />

      <ChatList />

      <SendChat /> 
 

    </div>
  )
}
