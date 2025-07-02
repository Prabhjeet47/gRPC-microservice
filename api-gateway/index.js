import express from "express";
import dotenv from "dotenv";
import {loginUser, registerUser} from "./controllers/user.controller.js";
import {createTask, getAllTasks} from "./controllers/task.controller.js";

dotenv.config();
const app = express();

//middlewares
app.use(express.json());

//routes
app.get("/", (req, res) => {
  res.send("hi");
});
app.post("/user/login", loginUser);
app.post("/user/register", registerUser);
app.post("/task/show", getAllTasks);
app.post("/task/create", createTask);

app.listen(process.env.PORT, () => {
  console.log(`api-gateway running on http://localhost:${process.env.PORT}`);
});
