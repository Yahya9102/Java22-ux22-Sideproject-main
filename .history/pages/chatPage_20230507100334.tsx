import { NextPage } from "next"
import Chat from "@/p-components/chat.js"

interface Props {}

const ChatPage: NextPage<Props> = ({}) => {
  return (
    <div>
      <Chat />
    </div>
  )
}

export default ChatPage
