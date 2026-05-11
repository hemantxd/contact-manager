"use server"

import axios from "axios"
import { UserType, SessionUserType } from "../_types/user"
import { redirect } from "next/navigation"
import { deleteSessionCookie, setSessionCookie } from "../lib/session"

const API_URL = "http://localhost:3001"

export const loginAction = async(formData: FormData) => {
    try{
        console.log(formData.get("email"), formData.get("password"))
        const response = await axios.get(`${API_URL}/users?email=${formData.get("email")}&password=${formData.get("password")}`)
        const user:UserType = response.data[0]
        if(!user){
            throw new Error("Invalid credentials")
        }
        //set user in cookies
        await setSessionCookie({
            id: user.id,
            name: user.name,
            email: user.email
        })
        
    }catch(e){
        throw new Error("Failed to login")
    }
    redirect("/contact")
}

export const logoutAction = async() => {
    try{
        //delete user from cookies
        await deleteSessionCookie()
        console.log("deleted session cookie")
    }catch(e){
        throw new Error("Failed to logout")
    }
    //redirect("/")
}