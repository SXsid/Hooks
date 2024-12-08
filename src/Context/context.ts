import { createContext, useContext, } from "react";
import { userProp } from "./Home";

export const UserContext = createContext<{
    user:userProp,
    loggout:()=>void

}|undefined>(undefined)


export const useUser = ()=>{
    const User = useContext(UserContext)
    //we used this for dx we can be dumb
    if(!User) {
        throw new Error("usercontext shuld we have a provider with the values")
        
    }
    return User
 
}