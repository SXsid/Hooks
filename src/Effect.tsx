import { useEffect, useState } from "react"


function Effect() {
    const [initValue,setInit]=useState("")
    const [finalValue,setFinal]=useState("")
    useEffect(()=>{
        const timer = setTimeout(()=>{
            setFinal(initValue)
            console.log(finalValue);
            
        },1000)
        return ()=>{
            clearTimeout(timer)
            console.log("value changed");
            
        }
    },[initValue])

  return (
    <div>
      <input
      value={initValue}
      onChange={(e)=>setInit(e.target.value)}
      />
    </div>
  )
}

export default Effect
