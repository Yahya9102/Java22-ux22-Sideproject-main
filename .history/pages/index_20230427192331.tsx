import { NextPage } from "next"
import LoadingPage from "@/p-components/loadingPage"

const startPage: NextPage = ({}) => {
  return (
    <div>
      <LoadingPage />
    </div>
  )
}

export default startPage
