import React from 'react'
import { useDispatch } from "react-redux"
import { signOut } from '../toolkit/usersSlice';


export default function NavHeader() {
  const dispatch  = useDispatch()

  const logout = () => {
    dispatch(signOut())
  } 
    
  return (
      <header className="fixed top-0 z-50 flex items-center justify-center w-full h-16 text-white bg-gray-900 shadow-xl md:h-16 ">
        <div className="text-xl font-bold text-center ">Chat</div>
        <div className="absolute text-right cursor-pointer right-4" onClick={logout}>Logout</div>
      </header>
  )
}
