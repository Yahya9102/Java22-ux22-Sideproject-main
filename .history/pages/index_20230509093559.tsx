import { NextPage } from "next"
import LoadingPage from "@/p-components/LoadingPage"

import Header from "@/p-components/header"

const startPage: NextPage = ({}) => {
  const ADMIN_USERNAME = process.env.REACT_APP_ADMINUSER
  const ADMIN_PASSWORD = process.env.REACT_APP_ADMINPASS
  console.log(ADMIN_USERNAME)

  return (
    <div>
      <Header />
      <LoadingPage />
    </div>
  )
}

export default startPage

// import { NextPage } from "next"
// import LoadingPage from "@/p-components/loadingPage"

// const startPage: NextPage = ({}) => {
//   return (
//     <div>
//       <LoadingPage />
//     </div>
//   )
// }

// export default startPage
