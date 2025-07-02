import taskModel from "../models/task.model.js";
import authClient from "../services/auth.client.js";

export async function AddTask(call, callback) {
  try {
    const {token, title, description} = call.request;

    authClient.VerifyToken({token}, async (err, res) => {
      if (res.valid == false || err) {
        return callback(null, {message: "unauthorized"});
      }

      const task = await taskModel.create({
        Title: title,
        Description: description,
        Author: res.id,
        CreatedAt: Date.now(),
      });

      return callback(null, {
        message: "task created successfully",
        taskId: task._id,
      });
    });
  } catch (err) {
    console.log(err);
  }
}

export async function GetTasks(call, callback) {
  const {token} = call.request;

  authClient.VerifyToken({token}, async (err, res) => {
    if (err || !res.valid) {
      return callback(null, {
        message: "unauthorized",
      });
    }

    try {
      const tasks = await taskModel.find();

      console.log(tasks);

      return callback(null, {
        tasks: tasks.map((task) => ({
          title: task.Title,
          description: task.Description,
          createdAt: task.CreatedAt,
          author: task.Author,
        })),
      });
    } catch (error) {
      console.log("Error fetching tasks:", error.message);
      return callback(null, {message: "internal error"});
    }
  });
}
