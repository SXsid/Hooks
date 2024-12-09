import  { forwardRef, Ref, useImperativeHandle, useRef, useState } from 'react'
interface refProp{
    logname:()=>void
}
function Imperitive() {
    const nameRef = useRef<refProp>(null)
  return (
    <div>
      <Child ref={nameRef}/>
      <button onClick={()=>nameRef.current?.logname()}>click </button>
    </div>
  )
}
const Child = forwardRef<refProp>((_,ref:Ref<refProp>)=>{
    const [name,setName]=useState("")
    function logname(){
        console.log(name);
        
    }
    useImperativeHandle(ref,()=>{
        return{
            logname
        }
    },[name])
    return(
        <>
            <h1>name is :{name}</h1>
            <input onChange={(e)=>setName(e.target.value)}/>
        </>
    )
})

export default Imperitive
