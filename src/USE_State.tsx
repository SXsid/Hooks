import  { useState } from 'react'

function USE_State() {
    const [count,setCount]=useState(0)
  return (
    <div>
      <h1>count:{count}</h1>
      <button onClick={()=>setCount(count=>count+1)}>incremtn</button>
      <button onClick={()=>setCount(count=>count-1)}>decrment</button>
    </div>
  )
}

export default USE_State
