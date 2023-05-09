import { NextPage } from "next"
import styles from "../styles/Matchsida.module.css"
import LeftSection from "@/p-components/LeftSection"
import MiddleSection from "@/p-components/MiddleSection"
import RightSection from "@/p-components/RightSection"

interface Props {}

const Matchsida: NextPage<Props> = ({}) => {
  return (
    <div className={styles.body_div}>
      <LeftSection />
      <MiddleSection />
      <RightSection />
    </div>
  )
}

export default Matchsida
