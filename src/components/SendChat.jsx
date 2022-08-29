import React, {useState} from 'react'
import TextField from '@mui/material/TextField';
import Grid from '@mui/material//Grid';
import Fab from '@mui/material/Fab';
import { KeyboardArrowRight } from '@mui/icons-material';
import { useSelector, useDispatch } from "react-redux"
import { sendChat, loadChats } from '../toolkit/chatsSlicer';

export default function SendChat() {
  const [chat, setChat] = useState('')
  const user = useSelector((state) => state.users.user)
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!Boolean(chat)) return
    dispatch(sendChat({ message: chat, name: user.name, id: user.id}))
    setChat('')
    dispatch(loadChats())
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="w-full h-16 mx-auto mb-3 md:ml-14">
        <div className="grid grid-cols-4 p-3 mx-auto">

        <Grid className="col-span-3">
                <TextField
                 data-testid="input"
                  type="text"
                  id="outlined-basic-email"
                  label="Type Message"
                  fullWidth 
                  value={chat}
                  onChange={(e) => setChat(e.target.value)}
                />
            </Grid>

            <Grid className="mx-auto md:mx-5">
                <Fab onClick={handleSubmit} data-testid="submit-chat-btn" className="bg-blue-500" color="primary" aria-label="add"><KeyboardArrowRight /></Fab>
            </Grid>
        </div>
        </form>
    </>
  )
}
