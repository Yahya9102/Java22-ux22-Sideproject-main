import { NextPage } from "next"
import PlayerInfo from "@/p-components/PlayerInfo"
import MainFooter from "@/p-components/MainFooter"
import Header from "@/p-components/header"
import { User } from "@/types/users"

const Index: NextPage<User> = ({}) => {
  return (
    <div>
      <Header />
      <h1 className="text-center">
        <strong>Posts</strong>
      </h1>

      <PlayerInfo />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat,
        omnis? Dolorem, corrupti tempore nemo molestias, aspernatur praesentium
        repudiandae dolore facilis illum distinctio at facere aliquam quasi.
        Quas a similique voluptatum?
      </p>
      <MainFooter />
    </div>
  )
}

export default Index
