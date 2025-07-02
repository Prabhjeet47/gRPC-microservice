import mongoose from "mongoose";

const taskSchema = new mongoose.Schema({
  Title: {
    type: String,
    required: true,
  },
  Description: {
    type: String,
  },
  Author: {
    type: String,
    required: true,
  },
  CreatedAt: {
    type: String,
    required: true,
  },
});

const taskModel = mongoose.model("taskModel", taskSchema);
export default taskModel;
