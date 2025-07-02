import grpc from "@grpc/grpc-js";
import protoLoader from "@grpc/proto-loader";
import path from "path";

const packageDef = protoLoader.loadSync(path.resolve("../protos/task.proto"));
const grpcObj = grpc.loadPackageDefinition(packageDef);
const taskPackage = grpcObj.task;

const taskClient = new taskPackage.TaskService(
  "localhost:50052",
  grpc.credentials.createInsecure()
);

export default taskClient;
