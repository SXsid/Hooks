
import { useUser } from './context'

function Profile() {
  const {user}=useUser()
  return (
    <div>
      <h1>{user.name}</h1>
      {user.isLoggedIn?"yes":"no"}
    </div>
  )
}

export default Profile
