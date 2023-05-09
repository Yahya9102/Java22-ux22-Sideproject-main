// pages/api/user.ts
import { NextApiRequest, NextApiResponse } from "next"
import { connectToDatabase } from "@/utils/db"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "GET") {
    const { email } = req.query
    try {
      const db = await connectToDatabase()
      const user = await db.collection("userProfiles").findOne({ email })

      if (!user) {
        return res.status(404).json({ error: "User not found" })
      }

      res.status(200).json(user)
    } catch (error) {
      console.error("Error in user API:", error)
      res.status(500).json({ error: "Internal Server Error" })
    }
  } else {
    res.status(405).json({ error: "Method not allowed" })
  }
}

export default handler
