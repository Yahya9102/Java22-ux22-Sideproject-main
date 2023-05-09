import { NextPage } from "next"
import LoadingPage from "@/p-components/loadingPage"
import GuidelinePage from "@/p-components/guidelinePage"
interface Props {}

const startPage: NextPage<Props> = ({}) => {
  return (
    <div>
      <LoadingPage />
    </div>
  )
}

export default startPage
