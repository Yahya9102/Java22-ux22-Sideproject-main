import mongoose from "mongoose"

// Define the interface for the form data
interface InputData {
  name: string
  gamertag: string
  games: string
  discord: string
  gender: string
}

// Define the schema for the form data
const inputDataSchema = new mongoose.Schema<InputData>({
  name: String,
  gamertag: String,
  games: String,
  discord: String,
  gender: String,
})

// Create a model for the form data
const InputDataModel = mongoose.model<InputData>("InputData", inputDataSchema)

// Connect to the MongoDB database
mongoose.connect("mongodb://localhost:27017/GameMatch", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})

// Create an async function to save form data to the database
async function saveFormData(formData: InputData) {
  try {
    const inputData = new InputDataModel(formData)
    await inputData.save()
    console.log("Form data saved successfully")
  } catch (error) {
    console.error(error)
  }
}

// Update the fetchInputs function to retrieve data from the database
async function fetchInputs(): Promise<InputData[]> {
  try {
    const inputData = await InputDataModel.find()
    return inputData
  } catch (error) {
    console.error(error)
    return []
  }
}
