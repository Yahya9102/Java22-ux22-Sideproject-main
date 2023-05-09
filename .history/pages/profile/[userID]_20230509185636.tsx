import { NextPage, GetServerSideProps } from "next"
import { useRouter } from "next/router"
import { User } from "@/types/users"

interface Props {
  user: User
}

const UserProfile: NextPage<Props> = ({ user }) => {
  return (
    <div>
      <h1>{user.name}</h1>
      <p>Location: {user.location}</p>
      <p>Title: {user.title}</p>
      <p>Post: {user.post}</p>
      <p>Discord: {user.discord}</p>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const userId = context.params?.userId

  if (!userId) {
    return {
      notFound: true,
    }
  }

  try {
    const response = await fetch(`/api/user/${userId}`)

    if (!response.ok) {
      throw new Error("User not found")
    }

    const user: User = await response.json()

    return {
      props: {
        user,
      },
    }
  } catch (error) {
    console.error("Error fetching user:", error)
    return {
      notFound: true,
    }
  }
}

export default UserProfile
