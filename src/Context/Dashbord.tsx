
import { useUser } from './context'
import Profile from './Profile'
function Dashbord() {
  //we can acces loggocut wihtout wever passing the user data 
  
  const {loggout}=useUser()
  return (
    <div>
      <Profile />
      <button onClick={loggout}>loggout</button>
    </div>
  )
}

export default Dashbord
