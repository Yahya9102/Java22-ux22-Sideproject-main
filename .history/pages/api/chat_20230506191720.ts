import { Server } from "socket.io"

export default function handler(req, res) {
  if (!res.socket.server.io) {
    const io = new Server(res.socket.server)
    io.on("connection", (socket) => {
      socket.on("chat message", (message) => {
        io.emit("chat message", message) // Broadcast the message to all connected clients
      })
    })
    res.socket.server.io = io
  }
  res.end()
}
