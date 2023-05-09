import { NextPage } from "next"
import PlayerInfo from "@/p-components/PlayerInfo"
import MainFooter from "@/p-components/MainFooter"
import Header from "@/p-components/header"

interface Props {}

const Index: NextPage<Props> = ({}) => {
  return (
    <div>
      <Header />
      <PlayerInfo name={""} gender={""} discord={""} />
      <MainFooter />
    </div>
  )
}

export default Index
