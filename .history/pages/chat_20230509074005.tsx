import { NextPage } from "next"
import { MyChatComponent } from "../p-components/ChatPage"

import { useEffect, useState } from "react"
import { User } from "@/types/users"

const ChatPage: NextPage = ({}) => {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/api/")
        const data = await response.json()
        if (Array.isArray(data)) {
          setUsers(data)
        } else {
          console.log("Data is not an array:", data)
        }
      } catch (error) {
        console.error("Error fetching data:", error)
      }
    }
    fetchData()
  }, [])

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        marginTop: "20px",
      }}
    >
      <div>
        <MyChatComponent userId="1" userName="Philip" />
      </div>
      <div>
        <MyChatComponent userId="2" userName="Yahya" />
      </div>
    </div>
  )
}

export default ChatPage
