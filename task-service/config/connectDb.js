import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export default async function connectDb() {
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log("db connected successfully");
    })
    .catch((err) => {
      console.log(err);
    });
}
