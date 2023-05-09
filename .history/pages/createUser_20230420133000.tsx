import { NextPage } from "next"
import CreatePost from "@/p-components/CreatePost"
import Header from "@/p-components/header"
import MainFooter from "@/p-components/MainFooter"

interface Props {}

const CreateUser: NextPage<Props> = ({}) => {
  return (
    <div>
      <Header />
      <CreatePost />
      <MainFooter />
    </div>
  )
}

export default CreateUser
