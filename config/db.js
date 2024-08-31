
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const USERNAMES = process.env.USERNAMES;
const PASSWORD = process.env.PASSWORD;
const dbname = process.env.DB;
const mongoURI = (`mongodb+srv://${USERNAMES}:${PASSWORD}@cluster0.we1bjmz.mongodb.net/${dbname}`)
export const connectDB = async () => {
    await mongoose.connect(mongoURI).then(() => console.log("DB connected"))
}



