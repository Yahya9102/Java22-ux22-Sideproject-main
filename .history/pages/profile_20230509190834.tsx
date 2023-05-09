import { NextPage } from "next"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { User } from "@/types/users"

const Profile: NextPage = ({}) => {
  const router = useRouter()
  const [userData, setUserData] = useState<User | null>(null)
  const { id } = router.query

 

    fetchUserData()
  }, [id])

  return (
    <div>
      <h1>User Profile</h1>
      {userData ? (
        <div>
          <h2>{userData.name}</h2>
          <p>Location: {userData.location}</p>
          <p>Title: {userData.title}</p>
          <p>Post: {userData.post}</p>
          <p>Discord: {userData.discord}</p>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  )
}

export default Profile
