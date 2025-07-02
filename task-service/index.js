import grpc from "@grpc/grpc-js";
import protoLoader from "@grpc/proto-loader";
import path from "path";
import connectDb from "./config/connectDb.js";
import {AddTask, GetTasks} from "./controllers/task.controller.js";

const packageDef = protoLoader.loadSync(path.resolve("../protos/task.proto"));
const grpcObj = grpc.loadPackageDefinition(packageDef);
const taskPackage = grpcObj.task;

const server = new grpc.Server();

server.addService(taskPackage.TaskService.service, {
  AddTask,
  GetTasks,
});

connectDb();

server.bindAsync(
  "0.0.0.0:50052",
  grpc.ServerCredentials.createInsecure(),
  () => {
    console.log("service running on port 50052");
  }
);
