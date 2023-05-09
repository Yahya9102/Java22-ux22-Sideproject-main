import React from "react"
import LeftSection from "@/p-components/LeftSection"
import MiddleSection from "@/p-components/MiddleSection"
import RightSection from "@/p-components/RightSection"
import MatchSideHeader from "@/p-components/MatchSideHeader"
import LinkContainer from "@/p-components/LinkContainer"
import PlayerInfo from "@/p-components/PlayerInfo"
import TableContainer from "@/p-components/TableContainer"
import RegisterForm from "@/p-components/RegisterForm"
import styles from "styles/matchside.module.css"

function matchsida() {
  return (
    <div>
      <div className={styles.body_div}>
        <MatchSideHeader />
        <div>
          <LeftSection />
          <MiddleSection />
          <RightSection />
        </div>
      </div>
    </div>
  )
}

export default matchsida
