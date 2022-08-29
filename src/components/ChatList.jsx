import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { useSelector } from 'react-redux';
import ChatMessage from './ChatMessage';

export default function ChatList() {
    const [loadMore, setLoadMore] = useState(false)
    const [count, setCount] = useState(25)
    const username = useSelector((state) => state.users.user.name)
    let chats = useSelector((state) => state.chats.chats)
    let dataToDisplay = loadMore ? chats.slice(0, count) : chats.slice(0, 25)


    const handleLoadMore = () => {
        setLoadMore(true)
        setCount(prevCount => prevCount + 25)
    }

    useEffect(() => {
        if (dataToDisplay.length >= 25) {
            setLoadMore(true)
    }

    }, [dataToDisplay])


    
  return (
    <>
    <div className="h-full">
        <Button className={`${dataToDisplay.length < 25 || dataToDisplay.length === chats.length ? "hidden" : "block"} flex items-center justify-center mx-auto`} 
        onClick={handleLoadMore} 
        data-testid="loadmorebtn"
        >
            Load More
        </Button>
        <div>
            <div  className="px-2">
                { dataToDisplay.reverse().map((chat, idx) => 
                    (
                        <ChatMessage
                            key={idx}
                            isOwn={chat.name === username}
                            sender={chat.name}
                            loadMore={loadMore}
                        >
                            {chat.message}
                        </ChatMessage>
                    )
                )}
            </div>
        </div>
       

    </div>
    </>
  )
}
