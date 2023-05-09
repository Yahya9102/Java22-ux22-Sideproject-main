import { NextApiRequest, NextApiResponse } from "next"
import nextConnect from "next-connect"
import bcrypt from "bcrypt"
import { connectToDatabase } from "@/utils/db"

const handler = nextConnect<NextApiRequest, NextApiResponse>()

handler.post(async (req, res) => {
  try {
    const db = await connectToDatabase()
    const { email, password } = req.body

    const user = await db.collection("userProfiles").findOne({ email })
    if (!user) {
      return res.status(401).json({ error: "Invalid email or password" })
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)
    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid email or password" })
    }

    res.status(200).json({ userId: user._id })
  } catch (error) {
    console.error("Error in login API:", error)
    res.status(500).json({ error: "Internal Server Error" })
  }
})

export default handler
