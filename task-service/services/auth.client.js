import grpc from "@grpc/grpc-js";
import protoLoader from "@grpc/proto-loader";
import path from "path";

const packageDef = protoLoader.loadSync(path.resolve("../protos/auth.proto"));
const grpcObj = grpc.loadPackageDefinition(packageDef);
const authPackage = grpcObj.auth;

const authClient = new authPackage.AuthService(
  "localhost:50053",
  grpc.credentials.createInsecure()
);

export default authClient;
