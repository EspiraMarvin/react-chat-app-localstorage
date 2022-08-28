import React, { useState, useRef, useEffect } from 'react';
import Button from '@mui/material/Button';
import { useSelector, useDispatch } from 'react-redux';
import ChatMessage from './ChatMessage';

export default function ChatList() {
    const [loadMore, setLoadMore] = useState(false)
    const [count, setCount] = useState(25)
    const dispatch = useDispatch()
    const username = useSelector((state) => state.users.user.name)
    const chats = useSelector((state) => state.chats.chats)
    const dataToDisplay = loadMore ? chats.slice(0, count) : chats.slice(0, 25)

    const loadBtn = useRef(null)


    const handleLoadMore = () => {
        setLoadMore(true)
        setCount(prevCount => prevCount + 25)
    }

    const isInViewport = (element) => {
        const rect = element.getBoundingClientRect();
        console.log('rec is in viewport', rect)

        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
    

    useEffect(() => {
        // window.addEventListener('scroll', (event) => {});

        // onscroll = (event) => { console.log('event', event)}

        // const element = document.getElementById("loadmore");
        // element.scrollIntoView();
        // console.log('ELEMENT FOUND', element.scrollIntoView())


    }, [])

    
  return (
    <>
    <div className="h-full">
        
        <Button className="flex items-center justify-center mx-auto" onClick={handleLoadMore} ref={loadBtn} id="loadmore">Load More</Button>
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
       
        {/* <div className='bg-red-500' ref={messagesRef}>masad</div> */}

    </div>
    </>
  )
}
