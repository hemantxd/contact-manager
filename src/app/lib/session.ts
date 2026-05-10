import { cookies } from "next/headers";
import { UserType } from "../_types/user";

//set session cookie
export const setSessionCookie = async(user:UserType)=>{
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
export const getSessionCookie = async()=>{

    const session = (await cookies()).get("session")?.value
    
    if(!session) return null
    const user = JSON.parse(session) as UserType
    return user
}

//delete session cookie

export const deleteSessionCookie = async()=>{
    (await cookies()).delete("session")
}