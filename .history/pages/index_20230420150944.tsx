import { NextPage } from "next"
import PlayerInfo from "@/p-components/PlayerInfo"
import MainFooter from "@/p-components/MainFooter"
import Header from "@/p-components/header"
import { User } from "@/types/users"
import styles from "./styles/globals.module.css"

const Index: NextPage<User> = ({}) => {
  return (
    <div className={styles.body_>
      <Header />
      <h1 className="text-center">
        <strong>Posts</strong>
      </h1>

      <PlayerInfo />

      <MainFooter />
    </div>
  )
}

export default Index
