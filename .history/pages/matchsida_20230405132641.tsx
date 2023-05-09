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

  const handleSubmit: LeftSectionProps["onClick"] = (formData: FormData) => {
    const formDataObj = Object.fromEntries(formData.entries())
    setFormData(formDataObj)
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
