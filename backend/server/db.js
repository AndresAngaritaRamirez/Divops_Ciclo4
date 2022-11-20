import mongoose from "mongoose";
//import { MONGODB_URI } from './config.js'

const MONGODB_URI = "mongodb+srv://divops:Mintic123@cluster1.sscc1o8.mongodb.net/divops";

export async function DBconnection() {
  try {
    const db = await mongoose.connect(MONGODB_URI);
    console.log("Connection established to " + db.connection.name)
  } catch (error) {
  }
}
