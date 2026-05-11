'use server'
import { cookies } from "next/headers";
import { SessionUserType, UserType } from "../_types/user";

//set session cookie
export const setSessionCookie = async(user:SessionUserType)=>{
    (await cookies()).set("session", JSON.stringify(user), 
    {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 60 * 60 * 24 * 7,
        path: "/"
    }
)
}

//get session cookie
export const getSessionCookie = async() : Promise<UserType | null>=>{

    const cookieStore = cookies()
    const sessionCookie = (await cookieStore).get("session")
    if(!sessionCookie) return null
    return JSON.parse(sessionCookie.value)
}

//delete session cookie

export const deleteSessionCookie = async()=>{
    const cookieStore = cookies();
    (await cookieStore).delete("session")
}