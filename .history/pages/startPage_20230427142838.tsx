import { NextPage } from "next"
import LoadingPage from "@/p-components/loadingPage"
import GuidelinePage from "@/p-components/guidelinePage"
const startPage: NextPage = ({}) => {
  return (
    <div>
      <LoadingPage />
      <GuidelinePage />
    </div>
  )
}

export default startPage
