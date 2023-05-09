import { NextPage } from "next"
import { MyChatComponent } from "../p-components/ChatPage"

const ChatPage: NextPage = ({}) => {
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
