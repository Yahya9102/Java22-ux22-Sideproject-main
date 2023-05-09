import { NextPage } from "next"
import "./styles/leftSection.module.css"
import LeftSection from "./LeftSection"
import MiddleSection from "./MiddleSection"
import RightSection from "./RightSection"
import "./styles/Matchsida.module.css"

interface Props {}

const BodySection: NextPage<Props> = ({}) => {
  return (
    <div>
      <LeftSection />
      <MiddleSection />
      <RightSection />
    </div>
  )
}

export default BodySection
