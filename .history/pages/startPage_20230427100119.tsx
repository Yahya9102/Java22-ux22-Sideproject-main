import { NextPage } from "next"
import LoadingPage from "@/p-components/loadingPage"

interface Props {}

const startPage: NextPage<Props> = ({}) => {
  return (
    <div>
      <LoadingPage />
    </div>
  )
}

export default startPage
