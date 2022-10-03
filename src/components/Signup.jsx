import React, { useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useDispatch } from "react-redux"
import { signInUser } from '../toolkit/usersSlice';


export default function Signup() {
    const [error, setError] = useState(false)
    const [name, setName] = useState('marvin')
    const dispatch = useDispatch()

    const hasWhiteSpaces = (s) => {
      return s.indexOf(' ') >= 0
    }

    const handleSubmit = (e) => {
      e.preventDefault()
      if (hasWhiteSpaces(name) || name.length === 0){
        setError(true) 
        return
      } else {
         setError(false)
         let id = Math.random()*10
         dispatch(signInUser({name: name, id: id}))
      }
    }

  return (
    <>
      <div className="grid w-full h-screen text-black transition-all bg-white place-items-center dark:bg-black dark:text-white">
      <form onSubmit={handleSubmit} autoComplete="off" className="grid">
      <div className="text-xl font-bold text-center mb-7">Enter your name to start a chart</div>
 
        <TextField 
          label="Name" 
          variant="outlined"   
          type="text"
          value={name}
          onChange={(e) =>  {
            setError(false)
            setName(e.target.value)
          }}
          className={`${!error} w-[300px] sm:w-80 md:w-96 pb-3`}
          error={!!error}
          data-testid="input"
        />
        {error && <div className="pb-2 pl-3 text-red-500" id="error" data-testid="error-message">Enter a username</div>}
      
    
      <Button
        type="submit"
        className='py-3 text-white bg-blue-600 w-[300px] sm:w-80 md:w-96 hover:bg-blue-800'
        data-testid="submit-btn"
      >
        Submit
      </Button>
      </form>
      </div>
    </>
  )
}
