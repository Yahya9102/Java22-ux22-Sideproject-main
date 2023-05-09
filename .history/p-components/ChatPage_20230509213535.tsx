import React, { useEffect, useRef, useState } from "react"
import Talk from "talkjs"
import styles from "p-components/styles/chatPage.module.css"

interface MyChatComponentProps {
  userId: string
  userName: string
  otherUserId: string
  otherUserName: string
}

export const MyChatComponent: React.FC<MyChatComponentProps> = ({
  userId,
  userName,
  otherUserId,
  otherUserName,
}) => {
  const chatboxEl = useRef<HTMLDivElement>(null)
  const [talkLoaded, markTalkLoaded] = useState(false)

  useEffect(() => {
    Talk.ready.then(() => markTalkLoaded(true))

    if (talkLoaded) {
      const currentUser = new Talk.User({
        id: userId,
        name: userName,
        email: `${userName.toLowerCase().replace(" ", "")}@example.com`,
        photoUrl: `https://randomuser.me/api/portraits/men/${userId}.jpg`,
        role: "default",
      })

      const otherUser = new Talk.User({
        id: otherUserId,
        name: otherUserName,
        email: `${otherUserName.toLowerCase().replace(" ", "")}@example.com`,
        photoUrl: `https://randomuser.me/api/portraits/men/${otherUserId}.jpg`,
        role: "default",
      })

      const session = new Talk.Session({
        appId: "tgbJr06e",
        me: currentUser,
      })

      const conversationId = Talk.oneOnOneId(currentUser, otherUser)
      const conversation = session.getOrCreateConversation(conversationId)
      conversation.setParticipant(currentUser)
      conversation.setParticipant(otherUser)

      const chatbox = session.createChatbox()
      chatbox.select(conversation)
      chatbox.mount(chatboxEl.current!)

      return () => session.destroy()
    }
  }, [talkLoaded, userId, userName, otherUserId, otherUserName])

  return <div ref={chatboxEl} className={styles.chatContainer} />
}
