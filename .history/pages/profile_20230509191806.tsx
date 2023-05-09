import { NextPage } from "next"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { User } from "@/types/users"

const Profile: NextPage = ({}) => {
  const router = useRouter()
  const [userData, setUserData] = useState<User | null>(null)
  const { email } = router.query

  useEffect(() => {
    const fetchUserData = async () => {
      if (!email) return
      const decodedEmail = decodeURIComponent(email as string)
      try {
        const response = await fetch(`/api/user/${decodedEmail}`)
        const data = await response.json()
        setUserData(data)
      } catch (error) {
        console.error("Error fetching user data:", error)
      }
    }

    fetchUserData()
  }, [email])

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
