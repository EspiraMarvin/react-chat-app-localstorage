import React, { useState, useEffect, useMemo } from 'react';
import Button from '@mui/material/Button';
import { useDispatch, useSelector } from 'react-redux';
import ChatMessage from './ChatMessage';
import { deleteChat } from '../toolkit/chatsSlicer';

export default function ChatList() {
    const dispatch = useDispatch()

    const [loadMore, setLoadMore] = useState(false)
    const [count, setCount] = useState(25)

    const username = useSelector((state) => state.users.user.name)
    let chats = useSelector((state) => state.chats.chats)
    let memoizedChats = useMemo(() => chats, [chats])
    let dataToDisplay = loadMore ? memoizedChats.slice(0, count) : memoizedChats.slice(0, 25)

  

    const handleLoadMore = () => {
        setLoadMore(true)
        setCount(prevCount => prevCount + 25)
    }
    

    const handleDeleteMessage = (id) => {
        dispatch(deleteChat(id))
      }

    useEffect(() => {
        if (dataToDisplay.length >= 25) {
            setLoadMore(true)
        }
    }, [dataToDisplay])

    
  return (
    <main>
        <div className={`fixed w-full px-2 pt-4 overflow-x-hidden overflow-y-auto bottom-20 
            ${dataToDisplay.length > 9 && "h-5/6"} 
         `}>
        <Button className={`${dataToDisplay.length < 25 || dataToDisplay.length === memoizedChats.length ? "hidden" : "block"} flex items-center justify-center mx-auto -mt-6`} 
            onClick={handleLoadMore} 
            data-testid="loadmorebtn" 
         > 
            Load More 
        </Button> 
                { dataToDisplay.reverse().map((chat, idx) => 
                    (
                        <ChatMessage
                            key={idx}
                            isOwn={chat.name === username}
                            sender={chat.name}
                            time={chat.timeStamp}
                            loadMore={loadMore}
                            chatId={chat.id}
                            deleteMessage={handleDeleteMessage}
                        >
                            {chat.message}
                        </ChatMessage>
                    )
                )}
            </div>
    </main>
  )
}
