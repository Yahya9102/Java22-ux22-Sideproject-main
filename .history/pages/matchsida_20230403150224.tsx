import React from "react"
import LeftSection from "./LeftSection"
import MiddleSection from "./MiddleSection"
import RightSection from "./RightSection"
import MatchSideHeader from "./MatchSideHeader"
import LinkContainer from "./LinkContainer"
import PlayerInfo from "./PlayerInfo"
import TableContainer from "./TableContainer"
import RegisterForm from "./RegisterForm"
import "./styles/main.css"

function Main() {
  return (
    <div className="main">
      <MatchSideHeader />
      <div className="content">
        <LeftSection />
        <MiddleSection>
          <LinkContainer />
          <PlayerInfo />
          <TableContainer />
        </MiddleSection>
        <RightSection>
          <RegisterForm />
        </RightSection>
      </div>
    </div>
  )
}

export default Main
