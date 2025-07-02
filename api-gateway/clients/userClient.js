import grpc from "@grpc/grpc-js";
import protoLoader from "@grpc/proto-loader";
import path from "path";

const packageDef = protoLoader.loadSync(path.resolve("../protos/user.proto"));
const grpcObj = grpc.loadPackageDefinition(packageDef);
const userPackage = grpcObj.user;

const userClient = new userPackage.UserService(
  "localhost:50051",
  grpc.credentials.createInsecure()
);

export default userClient;
