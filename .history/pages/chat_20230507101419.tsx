import { NextPage } from "next"
import { MyChatComponent } from "../p-components/ChatPage"

interface Props {}

const ChatPage: NextPage<Props> = ({}) => {
  return (
    <div>
      <MyChatComponent />
    </div>
  )
}

export default ChatPage
