import React from 'react'
import { useSelector, useDispatch } from "react-redux"
import { signOut } from '../toolkit/usersSlice';


export default function NavHeader() {
  const dispatch  = useDispatch()

  const logout = () => {
    dispatch(signOut())
  } 
    
  return (
    <div className="fixed inset-x-0 z-50 p-4 text-white bg-black shadow-xl row md:p-6">
    <div className="text-xl font-bold text-center ">Chat</div>
    <div className="text-right cursor-pointer -mt-7" onClick={logout}>Logout</div>
  </div>
  )
}
