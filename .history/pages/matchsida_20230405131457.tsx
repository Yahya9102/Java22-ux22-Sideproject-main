import React, { useState } from "react"
import { NextPage } from "next"
import styles from "../styles/Matchsida.module.css"
import LeftSection from "@/p-components/LeftSection"
import MiddleSection from "@/p-components/MiddleSection"
import RightSection from "@/p-components/RightSection"

interface Props {}

const Matchsida: NextPage<Props> = () => {
  const [formData, setFormData] = useState({
    name: "",
    gamertag: "",
    games: "",
    discord: "",
    gender: "",
  })

  const handleClick = (formData: FormData) => {
    // handle click event here
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormData({ ...formData, [name]: value })
  }

  const playerInfoProps = {
    name: formData.name,
    gamertag: formData.gamertag,
    games: formData.games,
    discord: formData.discord,
    gender: formData.gender,
  }

  return (
    <div className={styles.body_div}>
      <LeftSection
        onClick={handleClick}
        formData={formData}
        onInputChange={handleInputChange}
      />
      <MiddleSection />

      <RightSection />
    </div>
  )
}

export default Matchsida
