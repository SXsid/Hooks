import  { useReducer } from 'react'
interface formdata{
    name:string,
    email:string,
    password:string,
    currentPage:number,
    error:string|null
}

type Action= {type:"nextStep"}|{type:"previousStep"}|{type:"setFiled",vlaue:string,field:string}|{type:"setError",error:string}|{type:"submit"}


const initvalue:formdata={
    name:'',
    password:""
    ,email:"",
    error:null
    ,currentPage:1

}
const reducer =(state:formdata,action:Action)=>{
    const {type}=action
    switch(type){
        case'nextStep':{
            if(state.currentPage===1 &&!state.name){
                return{...state,error:"name is required"}
            }
            if(state.currentPage===2 &&!state.email){
                return{...state,error:"email is required"}
            }
            return{
                ...state,
                currentPage:state.currentPage+1,
                error:null
            }
        }
        case 'previousStep':{
            return{
                ...state,
                currentPage:state.currentPage-1,
                error:null
            }
        }
        case 'setFiled':{
            return{...state,[action.field]:action.vlaue}
        }
        case 'submit':{
            
            return{
                name:'',
                password:""
                ,email:"",
                error:null
                ,currentPage:1
            }
        }
        case'setError':{
            return{...state,error:action.error}
        }

        default:
            return state
    }
}


function MutliStepForm() {
    const [state,dispatch]=useReducer(reducer,initvalue)
    
    function handleInput(e:React.ChangeEvent<HTMLInputElement>){
        const {name,value}=e.target
        dispatch({type:"setFiled",vlaue:value,field:name})
    }
   
    function handleSubmit(){
        if(!state.password){
            dispatch({type:"setError",error:"plzz add password"})
            return
        }
        dispatch({type:"submit"})
        alert("submited..")

    }
    function handlePage({type}:{type:"nextStep"|"previousStep"}){
        dispatch({type})

    }
    
  return (
    <div>
        <h1>Multi step form</h1>
        {state.error}
      {state.currentPage===1&&
      <div>
            <h3>enter your name</h3>
            <input name="name" value={state.name} onChange={(e)=>handleInput(e)}/>
        </div>}
      {state.currentPage===2&&
      <div>
            <h3>enter your emial</h3>

            <input name="email" value={state.email} onChange={(e)=>handleInput(e)}/>
        </div>}
      {state.currentPage===3&&
      <div>
            <h3>enter your password</h3>

            <input name="password" value={state.password} onChange={(e)=>handleInput(e)}/>
        </div>}
        {state.currentPage!==3&&<button onClick={()=>handlePage({type:"nextStep"})}>next</button>}
        {state.currentPage!==1&&<button onClick={()=>handlePage({type:"previousStep"})}>back</button>}
        {state.currentPage===3&&<button onClick={handleSubmit}>submit</button>}
        
    </div>
  )
}

export default MutliStepForm
