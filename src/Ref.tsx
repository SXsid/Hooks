import  { useEffect, useRef } from 'react'

function Ref() {
  const inputRef=useRef<HTMLInputElement|null>(null)
  const name=useRef("")
  const gender=useRef("")
  function submitHandler(e:React.MouseEvent<HTMLButtonElement>){
    e.preventDefault()
    console.log({
      name:name.current,
      gender:gender.current
    });
    
  }

  useEffect(()=>{
    inputRef.current?.focus()
  },[])
  return (
    <form>
      <input ref={inputRef} type="text" name="" id="" onChange={(e)=>name.current=e.target.value} />
      <input ref={inputRef}  type="text" name="" id="" onChange={(e)=>gender.current=e.target.value} />
      <button type='submit' onClick={(e)=>submitHandler(e)}>press me daddy</button>
    </form>
  )
}

export default Ref
