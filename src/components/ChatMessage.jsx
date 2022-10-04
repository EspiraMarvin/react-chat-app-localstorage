import React, { useEffect, useRef, useState } from 'react'
import ListItemText from '@mui/material/ListItemText';
import { useDispatch } from 'react-redux';
import { KeyboardArrowDown, DeleteSweep, EditOutlined, CloseSharp, SaveSharp } from '@mui/icons-material';
import { editChat } from '../toolkit/chatsSlicer';

export default function Chat({chatId, isOwn, sender, children, time, deleteMessage ,loadMore }) {
    const dispatch = useDispatch()
    const [edit, setEdit] = useState(false) 

    const inputRef = useRef()
    const messageRef = useRef(null)

    const scrollToBottom = () => {
      messageRef.current.scrollIntoView({ behavior: "smooth" })
    }

    const showOptions = () => {
    }

    const editMessage = (chatId) => {
      let editted = { id: chatId, message: inputRef.current.value}

      dispatch(editChat(editted))
      setEdit(false)
    }

    const editButton = () => (
        !edit && <EditOutlined className="w-6 h-4 mb-1 opacity-0 cursor-pointer group-hover:opacity-80" onClick={() => setEdit(prev => !prev)}/> 
      )

    const closeButton = () => (
       edit && 
       <>
       <SaveSharp className="w-6 h-4 mb-1 opacity-0 cursor-pointer group-hover:opacity-80" onClick={() => editMessage(chatId)}/> 
       <CloseSharp className="w-6 h-4 mb-1 opacity-0 cursor-pointer group-hover:opacity-80" onClick={() => setEdit(false)}/> 
     </>
     
    )

    useEffect(() => {
      if (loadMore) return
      scrollToBottom()
    }, [loadMore])


  return (

    <div className="grid md:grid-cols-2 gap-x-10 group hover:opacity-70">
        <ListItemText 
        className={`
        ${isOwn 
          ? 
           "text-right min-w-xs md:col-start-2 bg-green-100 ml-4 md:ml-0 "
          :
           "text-left min-w-xs bg-gray-200 md:col-start-1 mr-4 md:mr-0" 
         }
         h-auto rounded-sm
        `}
        >
          <div className={`${isOwn ? "" : ""} flex p-2  `}>
            {!edit && children}
          </div>
          {edit && 
          <div className="ml-4 text-right bg-green-100 min-w-xs md:col-start-2 md:ml-0 ">
            <input type="text"
                ref={inputRef}
                defaultValue={children}
                className="flex w-5/6 h-10 mb-2 ml-2"
              />
          </div>
  
            }
          {isOwn &&
              <KeyboardArrowDown onClick={showOptions} className="absolute right-0 h-8 pr-2 opacity-0 -mt-11 group-hover:opacity-90 w-9" />
          }
          <div className="text-[10px] italic px-2">
          {isOwn && 
          <>
            { editButton() }
            { closeButton() }
            <DeleteSweep className="w-6 h-4 mb-1 opacity-0 cursor-pointer group-hover:opacity-80" onClick={() => deleteMessage(chatId)}/> 
          </>
          }
            {sender}, {time}
          </div>
        </ListItemText>
        <div ref={messageRef}></div>
    </div>

  )
}
