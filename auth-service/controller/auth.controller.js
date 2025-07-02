import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export default function VerifyToken(call, callback) {
  try {
    const {token} = call.request;

    if (!token) {
      return callback(null, {valid: false});
    }

    const decodedData = jwt.verify(token, process.env.SECRET_KEY);

    return callback(null, {
      valid: true,
      email: decodedData.email,
      id: decodedData.id,
    });
  } catch (err) {
    console.log(err.message);
    return callback(null, {valid: false});
  }
}
