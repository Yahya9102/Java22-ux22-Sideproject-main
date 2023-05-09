import { NextPage } from "next"
import LoadingPage from "@/p-components/loadingPage"
import GuidelinePage from "@/pages/GuidelinePage"
const startPage: NextPage = ({}) => {
  return (
    <div>
      <LoadingPage />
    </div>
  )
}

export default startPage
