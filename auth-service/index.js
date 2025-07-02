import grpc from "@grpc/grpc-js";
import protoLoader from "@grpc/proto-loader";
import path from "path";
import VerifyToken from "./controller/auth.controller.js";

const packageDef = protoLoader.loadSync(path.resolve("../protos/auth.proto"));
const grpcObj = grpc.loadPackageDefinition(packageDef);
const authPackage = grpcObj.auth;

const server = new grpc.Server();

server.addService(authPackage.AuthService.service, {
  VerifyToken,
});

server.bindAsync(
  "0.0.0.0:50053",
  grpc.ServerCredentials.createInsecure(),
  () => {
    console.log("service running on port 50053");
  }
);
