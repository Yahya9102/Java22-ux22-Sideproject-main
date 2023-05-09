import { NextPage } from "next"
import "./styles/leftSection.module.css"
import LeftSection from "./LeftSection"
import MiddleSection from "./MiddleSection"
import RightSection from "./RightSection"
import styles from "../styles/Matchsida.module.css"

interface Props {}

const BodySection: NextPage<Props> = ({}) => {
  return (
    <div className={styles.div_body}>
      <LeftSection />
      <MiddleSection />
      <RightSection />
    </div>
  )
}

export default BodySection
