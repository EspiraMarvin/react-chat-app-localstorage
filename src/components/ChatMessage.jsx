import React, { useEffect, useRef } from 'react'
import ListItemText from '@mui/material/ListItemText';


export default function Chat({isOwn, sender, children, loadMore}) {

    const messageRef = useRef(null)

    const scrollToBottom = () => {
      messageRef.current.scrollIntoView({ behavior: "smooth" })
    }

    useEffect(() => {
      if (loadMore) return
      scrollToBottom()
    }, [loadMore])


  return (

    <div className="flex-row-reverse">
        <ListItemText className={`${isOwn ? "text-right" : "text-left" } h-16 `}>
          <div className={`${isOwn ? "text-right" : "text-left"} lg:p-2`}>
            {children}
          </div>
          <div className="text-[10px] italic">
            {sender}
          </div>
        </ListItemText>
        <div ref={messageRef}></div>
    </div>

  )
}
