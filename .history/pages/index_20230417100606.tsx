import { NextPage } from "next"
import PlayerInfo from "@/p-components/PlayerInfo"
import MainFooter from "@/p-components/MainFooter"
import Header from "@/p-components/header"

interface Props {}

const Index: NextPage<Props> = ({}) => {
  return (
    <div>
      <div>
        <Header />
        <PlayerInfo name={""} gender={""} discord={""} />
        <MainFooter />
      </div>
    </div>
  )
}

export default Index
