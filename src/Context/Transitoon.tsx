import  { useState } from 'react'

function Transitoon() {
    const [data,setData]=useState([{
        name:"",
        content:""
    }])
   const tab=[
    {
      
        name:"home",
        content:"this is home"
    },
    {

        name:"about",
        content:"this is about"
    }
   ]
   function handleData(value:string){
    const newData =tab.filter(data=>data.name===value)
    setData(newData)
   }
   return(
    <>
        <div style={{display:'flex'}}>
            {  tab.map(data=>{
                return(
                    <button key={data.name} onClick={()=>handleData(data.name)}>{data.name}</button>
                )
            })}
        </div>
        {data.map(value=>{
            return(
                <div>{value.content}</div>
            )
        })}
    </>
   )
}

export default Transitoon
