import { NextPage } from "next"
import React from "react"
import LeftSection from "@/p-components/LeftSection"
import MiddleSection from "@/p-components/MiddleSection"
import RightSection from "@/p-components/RightSection"
import MatchSideHeader from "@/p-components/MatchSideHeader"
import RegisterForm from "@/p-components/RegisterForm"

interface Props {}

const Matchsida: NextPage<Props> = ({}) => {
  return (
    <div>
      <div className="main">
        <MatchSideHeader />
        <div className="content">
          <LeftSection />
          <MiddleSection />
          <RightSection>
            <RegisterForm />
          </RightSection>
        </div>
      </div>
    </div>
  )
}

export default Matchsida
