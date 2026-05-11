'use client'


import { redirect, useRouter } from "next/navigation"
import { deleteSessionCookie } from "../lib/session"
import { logoutAction } from "../actions/auth"

const LogoutButton = () => {

  const Router = useRouter()

  const handleLogout = async () => {
    try{
        //delete user from cookies
        await logoutAction()
        //redirect("/")

        Router.push("/")
        Router.refresh()
        
    }catch(e){
        throw new Error("Failed to logout")
    }
  }
  return (
    <button onClick={handleLogout}
    className = " hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
    >LogoutButton</button>
  )
}

export default LogoutButton