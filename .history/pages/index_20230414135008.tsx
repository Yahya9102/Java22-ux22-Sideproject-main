import { NextPage } from "next"
import PlayerInfo from "@/p-components/PlayerInfo"

interface Props {}

const Index: NextPage<Props> = ({}) => {
  return (
    <div>
      <PlayerInfo name={""} gender={""} discord={""} />
    </div>
  )
}

export default Index
