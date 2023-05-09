import React, { useState } from "react"
import { NextPage } from "next"
import styles from "../styles/Matchsida.module.css"
import LeftSection, { LeftSectionProps } from "@/p-components/LeftSection"
import MiddleSection from "@/p-components/MiddleSection"
import RightSection from "@/p-components/RightSection"
import PlayerInfo, { PlayerInfoProps } from "@/p-components/PlayerInfo"

interface Props {}

const Matchsida: NextPage<Props> = ({}) => {
  const handleClick: LeftSectionProps["onClick"] = (event) => {
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    // handle form data here
  }

  const [formData, setFormData] = useState({
    name: "",
    gamertag: "",
    games: "",
    discord: "",
    gender: "",
  })

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }

  const playerInfoProps: PlayerInfoProps = {
    name: formData.name,
    gamertag: formData.gamertag,
    games: formData.games,
    discord: formData.discord,
    gender: formData.gender,
  }

  return (
    <div className={styles.body_div}>
      <LeftSection onClick={handleClick} onInputChange={handleInputChange} />
      <MiddleSection>
        <PlayerInfo {...playerInfoProps} />
      </MiddleSection>
      <RightSection />
    </div>
  )
}

export default Matchsida
