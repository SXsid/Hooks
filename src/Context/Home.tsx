
import { useState } from "react"
import  Dashbord from "./Dashbord"

import { UserContext } from "./context"

export interface userProp{
  name:string,
  isLoggedIn:boolean
}
function Roots() {
  //we can acced this from teh session and then upste the state whne the root mounts and protection comp work that way 
  const [user,setUser]=useState({
    name:"sid sds",
    isLoggedIn:true
  })
  function loggout(){
    setUser({name:"",isLoggedIn:false})
  }
    
  return (
   <UserContext.Provider value={{user,loggout}}>
    <Dashbord/>
   </UserContext.Provider>
  )
}

export default Roots
