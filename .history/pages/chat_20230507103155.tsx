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
        <h2>Henry Mill</h2>
        <MyChatComponent userId="1" userName="Henry Mill" />
      </div>
      <div>
        <h2>Jessica Wells</h2>
        <MyChatComponent userId="2" userName="Jessica Wells" />
      </div>
    </div>
  )
}

export default ChatPage
