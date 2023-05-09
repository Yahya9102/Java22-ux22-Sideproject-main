import React from "react"
import LeftSection from "@/p-components/LeftSection"
import MiddleSection from "@/p-components/MiddleSection"
import RightSection from "@/p-components/RightSection"
import MatchSideHeader from "@/p-components/MatchSideHeader"
import styles from "./styles/matchside.module.css"

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
