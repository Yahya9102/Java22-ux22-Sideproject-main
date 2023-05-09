import React from "react"
import styles from "./styles/playerInfo.module.css"

interface PlayerInfoProps {
  name: string
  gamertag: string
  games: string
  discord: string
  gender: string
}

function PlayerInfo(props: PlayerInfoProps) {
  return (
    <div>
      <h2>Player Information:</h2>
      <p>Name: {props.name}</p>
      <p>Gamertag: {props.gamertag}</p>
      <p>Games to play: {props.games}</p>
      <p>Discord: {props.discord}</p>
      <p>Gender: {props.gender}</p>
    </div>
  )
}

export default PlayerInfo
