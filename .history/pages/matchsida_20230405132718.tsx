import React, { useState } from "react"
import { NextPage } from "next"
import styles from "../styles/Matchsida.module.css"
import LeftSection, { LeftSectionProps } from "@/p-components/LeftSection"
import MiddleSection from "@/p-components/MiddleSection"
import RightSection from "@/p-components/RightSection"
import PlayerInfo, { PlayerInfoProps } from "@/p-components/PlayerInfo"

interface Props {}

const Matchsida: NextPage<Props> = ({}) => {
  const [formData, setFormData] = useState({
    name: "",
    gamertag: "",
    games: "",
    discord: "",
    gender: "",
  })

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const formDataObj = new FormData(event.currentTarget)
    const formData = {
      name: formDataObj.get("name") as string,
      gamertag: formDataObj.get("gamertag") as string,
      games: formDataObj.get("games") as string,
      discord: formDataObj.get("discord") as string,
      gender: formDataObj.get("gender") as string,
    }
    setFormData(formData)
  }

  return (
    <div className={styles.body_div}>
      <LeftSection onClick={handleSubmit} />
      <MiddleSection>
        <PlayerInfo {...formData} />
      </MiddleSection>
      <RightSection />
    </div>
  )
}

export default Matchsida
