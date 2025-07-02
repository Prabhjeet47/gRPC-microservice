# ⚡ Microservices Architecture with Node.js, gRPC, MongoDB, and JWT

A full-fledged backend project implementing a **microservice architecture** using **gRPC for communication**, **MongoDB** for storage, and **JWT** for secure authentication — all orchestrated under an **API Gateway**.

## 📦 Project Structure

grpc-microservices/<br>
├── auth-service/ # Token verification service (JWT)<br>
├── user-service/ # Login & Register users<br>
├── task-service/ # Add/Get tasks (auth-protected)<br>
├── api-gateway/ # Routes external requests to services<br>
├── protos/ # Shared .proto files for gRPC<br>
└── README.md<br>

---

## ⚙️ Technologies Used

- 🧠 **Node.js** – Backend runtime
- 🔗 **gRPC** – Inter-service communication
- 🛡️ **JWT** – Authentication & Authorization
- 🗃️ **MongoDB** – Database for persistence
- 🐘 **dotenv** – Environment management
- 🔀 **API Gateway** – Central entry point for clients

---

## 🔐 Services Overview

### 1️⃣ Auth Service

- Verifies incoming JWT tokens
- Responds with user info if valid
- Acts as the **bouncer** of the system

### 2️⃣ User Service

- Handles user registration & login
- Signs JWT token for authenticated users

### 3️⃣ Task Service

- Adds and retrieves tasks
- Validates each request by calling `auth-service` internally via gRPC

### 4️⃣ API Gateway

- Forwards HTTP requests to respective services
- Calls gRPC methods under the hood

---

## 🔁 Internal Communication

All services interact using **gRPC** defined via `.proto` files. For example:

```proto
message VerifyTokenRequest {
  string token = 1;
}
```

🔧 Upcoming Improvements
🐧 Linux mastering

🐳 Dockerizing each service

📦 Docker Compose setup

🧪 Integration testing

🚀 Deploy on Render or Railway

🚀 Run Locally
Each service can be started individually:
```
cd user-service && node index.js
cd auth-service && node index.js
cd task-service && node index.js
cd api-gateway && node index.js
```
