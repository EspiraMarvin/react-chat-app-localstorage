import React, {useState} from 'react'
import TextField from '@mui/material/TextField';
import Fab from '@mui/material/Fab';
import { KeyboardArrowRight } from '@mui/icons-material';
import { useSelector, useDispatch } from "react-redux"
import { sendChat, loadChats } from '../toolkit/chatsSlicer';

export default function SendChat() {
  const [chat, setChat] = useState('')
  const user = useSelector((state) => state.users.user)
  const dispatch = useDispatch()

  const getTimeDate = () => {
    let today = new Date()
    let date = (today.getMonth()+1)+'-'+today.getDate()+'-'+today.getFullYear()
    let time = today.getHours() + ":" + today.getMinutes()
    let dateTime = date+' '+time;
    return dateTime
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (chat.replace( /\s/g,"") === "")return
    dispatch(sendChat({ message: chat, name: user.name, id: Math.floor(Math.random() * 100) , timeStamp: getTimeDate()}))
    setChat('')
    dispatch(loadChats())
  }

  return (
    <footer className="fixed bottom-0 flex items-center justify-center w-full h-20 border-t-[1px] border-gray-200 ">

      <form onSubmit={handleSubmit} className="z-50 w-full h-16 mb-2">
        <div className="flex justify-center w-full p-3 mx-auto">

        <div className="w-5/6">
                <TextField
                 data-testid="input"
                  type="text"
                  id="outlined-basic-email"
                  label="Type Message"
                  fullWidth 
                  value={chat}
                  onChange={(e) => setChat(e.target.value)}
                />
            </div>

            <div className="mx-auto md:mx-5">
                <Fab onClick={handleSubmit} data-testid="submit-chat-btn" className="bg-blue-500" color="primary" aria-label="add"><KeyboardArrowRight /></Fab>
            </div>
        </div>
        </form>
      </footer>
  )
}
