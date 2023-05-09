import { NextPage } from "next"
import PlayerInfo from "@/p-components/PlayerInfo"

interface Props {}

const Index: NextPage<Props> = ({}) => {
  return (
    <div>
      <PlayerInfo />
    </div>
  )
}

export default Index
