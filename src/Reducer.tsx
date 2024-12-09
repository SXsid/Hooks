// 

import { useState } from "react"

interface Data{
    count:number,
    error:string|null
}
function Reducer() {
    const [data,setData]=useState<Data>({
        count:0,
        error:null
    
    })
  return (
    <div>
      <h1>count is {data.count}</h1>
      {data.error}
      <button onClick={()=>setData(value=>{
        const newCount = value.count+1
        const hasError=newCount>5
        return({
            ...value,count: hasError?value.count:newCount,error:hasError?"max reached!!":null
        })
      })}>incre</button>
      <button onClick={()=>setData(value=>{
        const newCount = value.count-1
        const hasError=newCount<0
        return({
            ...value,count: hasError?value.count:newCount,error:hasError?"min reached!!":null
        })
      })}>decre</button>
    </div>
  )
}

export default Reducer

