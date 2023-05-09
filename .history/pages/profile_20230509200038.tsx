import { NextPage } from "next"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { User } from "@/types/users"

interface userProps {
  email: string
  name: string
}

const Profile: NextPage<userProps> = ({}) => {
  const router = useRouter()
  const [userData, setUserData] = useState<userProps | null>(null)
  const { email } = router.query

  useEffect(() => {
    const fetchUserData = async () => {
      if (!email) return
      const decodedEmail = decodeURIComponent(email as string)
      try {
        const response = await fetch(`/api/user?email=${decodedEmail}`)

        const data = await response.json()
        setUserData(data)
      } catch (error) {
        console.error("Error fetching user data:", error)
      }
    }

    fetchUserData()
  }, [email])

  function redirectToCreatePost() {
    router.push("/createpost")
  }

  return (
    <div>
      <h1>User Profile</h1>
      {userData ? (
        <div>
          <button onClick={redirectToCreatePost}></button>
          <h2>{userData.name}</h2>
          <p>email: {userData.email}</p>

          <p>name: {userData.name}</p>
        </div>
      ) : (
        <p>Loading user data...</p>
      )}
    </div>
  )
}

export default Profile