import { NextPage } from "next"
import { useEffect, useState } from "react"
import { useRouter } from "next/router"
import { User } from "@/types/users"
import styles from "p-components/styles/profile.module.css"
import Header from "@/p-components/header"

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
    if (email) {
      router.push(`/createpost?email=${encodeURIComponent(email as string)}`)
    }
  }

  return (
    <div>
      <Header />
      <div className={styles.container}>
        <h1 className={styles.title}>Profile</h1>
        {userData ? (
          <div className={styles.user_info}>
            <button className={styles.button} onClick={redirectToCreatePost}>
              Create a post
            </button>
            <h2>{userData.name}</h2>
            <p>email: {userData.email}</p>
            <p>name: {userData.name}</p>
          </div>
        ) : (
          <p>Loading user data...</p>
        )}
      </div>
    </div>
  )
}

export default Profile
