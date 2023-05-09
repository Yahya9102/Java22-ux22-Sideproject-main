import { NextPage } from "next"
import CreatePost from "@/p-components/CreatePost"
import Header from "@/p-components/header"
import MainFooter from "@/p-components/MainFooter"
import { User } from "@/types/users"

const CreateUser: NextPage<User> = ({}) => {
  return (
    <div>
      <Header />
      <CreatePost />
      <MainFooter />
    </div>
  )
}

export default CreateUser
