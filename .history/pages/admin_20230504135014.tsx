import { NextPage } from "next"
import Header from "@/p-components/header"
import AdminPage from "@/p-components/AdminPage"
import MainFooter from "@/p-components/MainFooter"
import { User } from "@/types/users"

const Admin: NextPage<User> = ({}) => {
  return (
    <div>
      <Header />
      <AdminPage />
      <MainFooter />
    </div>
  )
}

export default Admin
