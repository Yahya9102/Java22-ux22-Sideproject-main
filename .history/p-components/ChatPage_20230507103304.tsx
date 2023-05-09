import React, { useEffect, useRef, useState } from "react"
import Talk from "talkjs"
import styles from "p-components/styles/chatPage.module.css"

interface MyChatComponentProps {
  userId: string
  userName: string
}

export const MyChatComponent: React.FC<MyChatComponentProps> = ({
  userId,
  userName,
}) => {
  const chatboxEl = useRef<HTMLDivElement>(null)
  const [talkLoaded, markTalkLoaded] = useState(false)

  useEffect(() => {
    Talk.ready.then(() => markTalkLoaded(true))

    if (talkLoaded) {
      const currentUser = new Talk.User({
        id: userId,
        name: userName,
        email: `${userName.toLowerCase()}@example.com`,
        photoUrl: `${userName.toLowerCase()}.jpeg`,
        welcomeMessage: `Hello, I am ${userName}!`,
        role: "default",
      })

      const otherUser = new Talk.User({
        id: "3",
        name: "Chat Bot",
        email: "chatbot@example.com",
        photoUrl: "chatbot.jpeg",
        welcomeMessage: "Hello!",
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
  }, [talkLoaded, userId, userName])

  return <div ref={chatboxEl} className={styles.chatContainer} />
}
