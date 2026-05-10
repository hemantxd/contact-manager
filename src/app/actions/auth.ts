"use server"

import axios from "axios"
import { UserType } from "../_types/user"
import { redirect } from "next/navigation"

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
        
    }catch(e){
        throw new Error("Failed to login")
    }
    redirect("/contact")
}

export const logoutAction = async() => {
    "use server"
    const res = await fetch(`${API_URL}/api/logout`, {
        method: "POST"
    })
    if(!res.ok) {
        throw new Error("Failed to logout")
    }
    return res.json()
}