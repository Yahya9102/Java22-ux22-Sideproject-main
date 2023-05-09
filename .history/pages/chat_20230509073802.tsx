import { NextPage } from "next"
import { MyChatComponent } from "../p-components/ChatPage"
import { types } from "util"
import { useState } from "react"

const ChatPage: NextPage = ({}) => {
  const [userID, setuserID] = useState()

  async function fetchingUsers() {
    const gettingUsers = await fetch("/api")
    const chatUsers = gettingUsers.json()
  }
  fetchingUsers()

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
