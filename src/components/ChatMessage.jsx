import React, { useEffect, useRef } from 'react'
import ListItemText from '@mui/material/ListItemText';


export default function Chat({isOwn, sender, children, loadMore}) {

    const messageRef = useRef(null)

    const scrollToBottom = () => {
      // messageRef.current.scroll(0, messageRef.current.scrollHeight);
      messageRef.current.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
      if (loadMore) return
      scrollToBottom()
    }, [children, loadMore])


  return (

       <ListItemText className={`${isOwn ? "text-right" : "text-left" } h-16 `}>
          <div className={`${isOwn ? "text-right" : "text-left"} lg:p-2`}>
            {children}
          </div>
          <div className="text-xs">
            {sender}, 09:31
          </div>
          <div ref={messageRef} className="mb-16"></div>
        </ListItemText>
  )
}
