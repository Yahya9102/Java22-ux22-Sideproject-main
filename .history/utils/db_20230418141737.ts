import { MongoClient, Db, MongoClientOptions } from "mongodb"
if (!process.env.MONGODB_URI) {
  throw new Error("No MongoDB URI specified")
}
const uri = process.env.MONGODB_URI
let cachedClient: MongoClient | null = null
let cachedDb: Db | null = null
const options: MongoClientOptions = {
  connectTimeoutMS: 5000,
  socketTimeoutMS: 5000,
}
export async function connectToDatabase() {
  if (cachedDb) {
    return cachedDb
  }
  try {
    const client = await MongoClient.connect(uri, options)
    const db = client.db()
    cachedDb = db
    console.log("CONNECTED TO DATABASE")
    return db
  } catch (err) {
    throw new Error(`Failed to connect to database: ${err}`)
  }
}
