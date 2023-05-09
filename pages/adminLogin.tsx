import { NextPage } from "next"
import Header from "@/p-components/header"
import AdminLogin from "@/p-components/AdminLogin"
import MainFooter from "@/p-components/MainFooter"
import { User } from "@/types/users"

const adminLogin: NextPage<User> = ({}) => {
  return (
    <div>
      <Header />
      <AdminLogin />
      <MainFooter />
    </div>
  )
}

export default adminLogin
