import { NextPage } from "next"
import PlayerInfo from "@/p-components/PlayerInfo"

interface Props {}

const Index: NextPage<Props> = ({}) => {
  return (
    <div>
      <PlayerInfo name={"Hej"} gender={""} discord={""} />
    </div>
  )
}

export default Index
