import { NextPage } from "next"
import PlayerInfo from "@/p-components/PlayerInfo"
import MainFooter from "@/p-components/MainFooter"

interface Props {}

const Index: NextPage<Props> = ({}) => {
  return (
    <div>
      <PlayerInfo name={""} gender={""} discord={""} />
      <MainFooter />
    </div>
  )
}

export default Index
