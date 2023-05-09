import { NextPage } from "next"
import "./styles/leftSection.module.css"
import LeftSection from "./LeftSection"
import MiddleSection from "./MiddleSection"
import RightSection from "./RightSection"

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
