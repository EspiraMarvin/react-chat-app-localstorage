import React, { useState } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


export default function Signup() {
    const [error, setError] = useState(false)

    const handleSubmit = () => {

    }
  return (
    <>
        <div className="grid w-full h-screen text-black transition-all bg-white place-items-center dark:bg-black dark:text-white">
      <form onSubmit={handleSubmit} autoComplete="off" className="grid">
      <div className="text-xl font-bold text-center mb-7">Enter your name to start a chart</div>

 
          <TextField 
          label="Name" 
          variant="outlined"   
          type="Your Name"
          className={`${!error && "pb-6"} w-[300px] sm:w-80 md:w-96`}
          error={!!error}
          />
      
    
      <Button
        type="submit"
        className='py-3 text-white bg-blue-600 w-[300px] sm:w-80 md:w-96 hover:bg-blue-800'
      >
        Submit
      </Button>
      </form>
        </div>
    </>
  )
}
