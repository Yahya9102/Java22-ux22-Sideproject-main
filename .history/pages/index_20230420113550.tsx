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

      <CreatePost />

      {/* <PlayerInfo /> */}
      <MainFooter />
    </div>
  )
}

export default Index
