import grpc from "@grpc/grpc-js";
import protoLoader from "@grpc/proto-loader";
import path from "path";
import connectDb from "./config/connectDb.js";
import {Login, Register} from "./controllers/user.controller.js";

const packageDef = protoLoader.loadSync(path.resolve("../protos/user.proto"));
const grpcObj = grpc.loadPackageDefinition(packageDef);
const userPackage = grpcObj.user;

const server = new grpc.Server();

server.addService(userPackage.UserService.service, {
  Login,
  Register,
});

connectDb();

server.bindAsync(
  "0.0.0.0:50051",
  grpc.ServerCredentials.createInsecure(),
  () => {
    console.log("User service started on port 50051");
  }
);
