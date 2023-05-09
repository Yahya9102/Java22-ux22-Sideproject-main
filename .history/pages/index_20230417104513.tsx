import { NextPage } from "next"
import PlayerInfo from "@/p-components/PlayerInfo"
import MainFooter from "@/p-components/MainFooter"
import Header from "@/p-components/header"

interface Props {}

const Index: NextPage<Props> = ({}) => {
  return (
    <div>
      <Header />{" "}
      <div className="flex h-screen justify-center items-center">
        <h1 className="text-center">Hello World</h1>
      </div>
      <PlayerInfo name={""} infoPost={""} discord={""} />
      <MainFooter />
    </div>
  )
}

export default Index
