import { useMemo, useState } from "react"

const Data = new Array(29999999).fill(0).map((value,index)=>{
    return(
        {
            id:index,
            isTrue:index==29999998
        }
    )
})
function Memo() {
    const [count,setCount]=useState(0)
    const [data]= useState(Data)
    const selectedItem = useMemo(()=>{
       return  data.find(value=>value.isTrue)
    },[data])
  return (
    <div>
        <h1>count is :{count}</h1>
      <div>selectedItem:{selectedItem?.id}</div>
      <button onClick={()=>setCount(count+1)}>incremtne</button>
    </div>
  )
}

export default Memo
