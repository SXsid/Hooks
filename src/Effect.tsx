import { useEffect, useState } from "react"


function Effect() {
    const [initValue,setInit]=useState<string>("")
    const [finalValue,setFinal]=useState<string>("")
    useEffect(()=>{
        const timer = setTimeout(()=>{
            console.log(initValue);
            
            setFinal(initValue)
            console.log(finalValue);
            
        },1000)
        return ()=>{
            clearTimeout(timer)
            console.log("value changed");
            
        }
    },[initValue,finalValue])

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
