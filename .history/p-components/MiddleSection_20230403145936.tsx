import React from "react"
import LinkContainer from "./LinkContainer"
import PlayerInfo from "./PlayerInfo"
import TableContainer from "./TableContainer"
function MiddleSection() {
  return (
    <div className="middle_section">
      <LinkContainer />
      <PlayerInfo />
      <TableContainer />
    </div>
  )
}

export default MiddleSection
