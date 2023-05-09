// Import necessary dependencies
import Talk from "talkjs"
import { useEffect, useState, useRef } from "react"
import styles from "p-components/styles/chatPage.module.css"

// Create a React functional component for the chat
export function MyChatComponent() {
  const chatboxEl = useRef<HTMLDivElement>(null)

  // Set up a state for TalkJS loading
  const [talkLoaded, markTalkLoaded] = useState(false)

  // Run an effect when the component mounts
  useEffect(() => {
    // Check if TalkJS is ready and set the state
    Talk.ready.then(() => markTalkLoaded(true))

    // If TalkJS is ready, create and configure users and chat
    if (talkLoaded) {
      // Create the current user object
      const currentUser = new Talk.User({
        id: "1",
        name: "Henry Mill",
        email: "henrymill@example.com",
        photoUrl: "henry.jpeg",
        welcomeMessage: "Hello!",
        role: "default",
      })

      // Create the other user object
      const otherUser = new Talk.User({
        id: "2",
        name: "Jessica Wells",
        email: "jessicawells@example.com",
        photoUrl: "jessica.jpeg",
        welcomeMessage: "Hello!",
        role: "default",
      })

      // Create a TalkJS session with the current user
      const session = new Talk.Session({
        appId: "tgbJr06e",
        me: currentUser,
      })

      // Create a conversation between the two users
      const conversationId = Talk.oneOnOneId(currentUser, otherUser)
      const conversation = session.getOrCreateConversation(conversationId)
      conversation.setParticipant(currentUser)
      conversation.setParticipant(otherUser)

      // Create a chatbox and mount it to the DOM element
      const chatbox = session.createChatbox()
      chatbox.select(conversation)
      chatbox.mount(chatboxEl.current!)

      // Clean up the session when the component is unmounted
      return () => session.destroy()
    }
  }, [talkLoaded])

  // Render the chatbox container
  return <div ref={chatboxEl} className={styles.chatContainer} />
}

// Import the chat component and Next.js dependencies
import { NextPage } from "next"

// Define the interface for the ChatPage properties
interface Props {}

// Create the ChatPage component
const ChatPage: NextPage<Props> = ({}) => {
  return (
    <div>
      <MyChatComponent />
    </div>
  )
}

// Export the ChatPage component as default
export default ChatPage
