import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export default async function connectDb() {
  try {
    mongoose
      .connect(process.env.MONGO_URL)
      .then(() => {
        console.log("database connected successfully");
      })
      .catch((err) => {
        console.log(err);
      });
  } catch (err) {
    console.log("error connecting db- ", err);
  }
}
