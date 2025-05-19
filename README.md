# Auth Module – Express + TypeScript + Prisma + JWT

This project is a basic authentication module built using **Express**, **TypeScript**, **Prisma**, and **jsonwebtoken**. It includes user registration, login, and JWT-based authentication.

## 📁 Project Structure

    src/
    │
    ├── controllers/
    │ └── auth.controller.ts
    ├── middlewares/
    │ └── auth.middleware.ts
    ├── routes/
    │ └── auth.routes.ts
    ├── services/
    │ └── auth.service.ts
    ├── prisma/
    │ └── client.ts
    ├── utils/
    │ └── jwt.ts
    ├── app.ts
    └── server.ts


## 🚀 Features

- User Registration
- User Login
- JWT Token Generation
- Protected Routes using Middleware
- Prisma ORM for DB access
- TypeScript for type safety

## 📦 Tech Stack

- **Express** – Web framework
- **TypeScript** – Type-safe JavaScript
- **Prisma** – Next-gen ORM for PostgreSQL, MySQL, etc.
- **jsonwebtoken** – JWT token generation and verification
- **bcrypt** – Password hashing

## 🛠️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/your-username/your-auth-project.git
cd your-auth-project

npm install

Create a .env file at the root:

.env
DATABASE_URL="postgresql://user:password@localhost:5432/your_db"
JWT_SECRET="your_jwt_secret"
PORT=4000

npx prisma init
npx prisma migrate dev --name init

npm run dev
