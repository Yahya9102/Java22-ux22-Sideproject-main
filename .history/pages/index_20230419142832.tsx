import { NextPage } from "next"
import PlayerInfo from "@/p-components/PlayerInfo"
import MainFooter from "@/p-components/MainFooter"
import Header from "@/p-components/header"
import CreatePost from "@/p-components/CreatePost"
interface Props {}

const Index: NextPage<Props> = ({}) => {
  return (
    <div>
      <Header />
      <h1 className=" text-center">
        <strong>Posts</strong>
      </h1>
      <CreatePost />
      <PlayerInfo />
      {/* <PlayerInfo /> */}
      <MainFooter />
    </div>
  )
}

export default Index
