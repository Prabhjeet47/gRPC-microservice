import userModel from "../models/user.model.js";
import tokenizer from "../services/createToken.js";
import bcrypt from "bcrypt";

export async function Register(call, callback) {
  try {
    const {username, email, password} = call.request;

    const exists = await userModel.findOne({email});

    if (exists) {
      return callback(null, {
        token: "",
        message: "User already exists with this email",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await userModel.create({
      username: username,
      email: email,
      password: hashedPassword,
    });
    const jwt = tokenizer(user);
    callback(null, {
      token: jwt,
      message: "User registered successfully",
    });
  } catch (err) {
    console.log(err);
    callback(err);
  }
}

export async function Login(call, callback) {
  try {
    const {email, password} = call.request;

    const user = await userModel.findOne({email});

    //no user with this email
    if (!user) {
      return callback(null, {
        token: "",
        message: "No user with this email",
      });
    }

    //wrong password
    const samePassword = await bcrypt.compare(password, user.password);
    if (samePassword == false) {
      return callback(null, {
        token: "",
        message: "Invalid credentials",
      });
    }

    //successfull login
    const jwt = tokenizer(user);
    callback(null, {
      token: jwt,
      message: "Successfull login",
    });
  } catch (err) {
    console.log(err);
    callback(err);
  }
}
