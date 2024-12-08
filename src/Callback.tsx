import { memo, useCallback, useState } from "react"
const Data =["aman","harsh","niraml","sid","raju"]
function Callback() {
    const [user,setUser]=useState(Data)
    const [count,setCount]=useState(0)
    //a funciton which get declared every rerend hence memo get ineffect to provent that wrap that in useCallback
    const DesiredUser =(text:string)=> {
        const user=Data.filter(value=>value.includes(text||""))
        setUser(user)
        }
    //a wrapped funciton in useCallback 
    const callUser=useCallback((text:string)=>{
        console.log(user[0]);
        
        const User=Data.filter(value=>value.includes(text||""))
        setUser(User)
    },[user])
  return (
    <div>
        <h1>{count}</h1>
      <Search onChange={callUser}/>
      <button onClick={()=>setCount(count+1)}>increse</button>
      {user.map(value=><div>{value}</div>)}
    </div>
  )
}
type SearchProp={
    onChange:(text:string)=>void
}
const Search = memo(({onChange}:SearchProp)=>{
    console.log("it renderd");
    
    return(
        <input 
        type="text"
        placeholder="serach user"
        onChange={(e)=>onChange(e.target.value)}/>
    )
})
export default Callback
