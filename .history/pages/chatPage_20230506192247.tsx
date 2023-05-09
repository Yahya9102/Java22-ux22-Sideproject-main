import { useEffect, useState } from "react"
import io from "socket.io-client"

const socket = io() // Connect to the WebSocket server

export default function Home() {
  const [messages, setMessages] = useState<string[]>([]) // Specify the type as string[]
  const [inputValue, setInputValue] = useState("")

  useEffect(() => {
    // Listen for 'chat message' event and update messages state
    socket.on("chat message", (message: string) => {
      // Specify the type as string
      setMessages((prevMessages) => [...prevMessages, message])
    })
  }, [])

  const sendMessage = () => {
    socket.emit("chat message", inputValue) // Send the message to the server
    setInputValue("") // Clear the input field
  }

  return (
    <div>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  )
}
