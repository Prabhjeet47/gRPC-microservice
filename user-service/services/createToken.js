import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export default function createToken(user) {
  return jwt.sign({id: user._id, email: user.email}, process.env.JWT);
}
