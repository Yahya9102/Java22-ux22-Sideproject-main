import { NextApiRequest, NextApiResponse } from "next"
import nextConnect from "next-connect"
import bcrypt from "bcrypt"
import { connectToDatabase } from "@/utils/db"

const handler = nextConnect<NextApiRequest, NextApiResponse>()

handler.post(async (req, res) => {
  try {
    const db = await connectToDatabase()
    const { name, email, password } = req.body

    const userExists = await db.collection("userprofiles").findOne({ email })
    if (userExists) {
      return res.status(400).json({ error: "User already exists" })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const result = await db.collection("users").insertOne({
      name,
      email,
      password: hashedPassword,
    })

    res.status(201).json({ userId: result.insertedId })
  } catch (error) {
    console.error("Error in register API:", error)
    res.status(500).json({ error: "Internal Server Error" })
  }
})

export default handler
