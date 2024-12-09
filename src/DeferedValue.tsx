import { useDeferredValue, useEffect, useState } from "react"


function DeferedValue() {
    const [value,setValue]=useState("")
    const debounceValue = useDeferredValue(value)
    useEffect(()=>{
        console.log("value is ",value);
        console.log("debounce value  is ",debounceValue);
        
    },[value,debounceValue])
  return (
    <div>
        {debounceValue}
      <input value={value} onChange={(e)=>setValue(e.target.value)}/>
    </div>
  )
}

export default DeferedValue
