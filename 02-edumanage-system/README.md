# EduManage: Student Management System

![React](https://img.shields.io/badge/React-Vite-61DAFB?logo=react&logoColor=white)
![Node](https://img.shields.io/badge/Node.js-Express-339933?logo=node.js&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?logo=mysql&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-06B6D4?logo=tailwindcss&logoColor=white)

EduManage is a full-stack student management application that I built to practice React, Node.js, Express, and MySQL. It is a learning project and not a production system, and it covers user registration, login with JWT authentication, and managing student records.

## Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Folder Structure](#folder-structure)
- [How Authentication Works](#how-authentication-works)
- [API Endpoints](#api-endpoints)
- [Getting Started](#getting-started)
- [Security Notes and Limitations](#security-notes-and-limitations)
- [Core Takeaway](#core-takeaway)

## Features

- Register a new account and log in with email and password
- Passwords are stored as bcrypt hashes, never as plain text
- Protected dashboard: logged-out users are sent to the login page
- Add, edit, and delete students
- Clear error messages, such as for a duplicate student email
- Sticky header and table head, responsive on mobile
- Automatic logout when the server rejects the token
- Unknown addresses are redirected to the dashboard

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend | React (Vite), React Router, Tailwind CSS, Axios |
| Backend | Node.js, Express, mysql2, dotenv, cors |
| Database | MySQL |
| Authentication | bcrypt (password hashing), jsonwebtoken (JWT) |

## Folder Structure

```text
02-edumanage-system/
├── client/
│   └── src/
│       ├── components/
│       │   └── ProtectedRoute.jsx
│       ├── pages/
│       │   ├── LoginPage.jsx
│       │   ├── RegisterPage.jsx
│       │   └── DashboardPage.jsx
│       ├── services/
│       │   ├── authService.js
│       │   └── studentService.js
│       ├── App.jsx
│       └── main.jsx
└── server/
    ├── config/
    │   └── db.js
    ├── src/
    │   ├── controllers/
    │   │   ├── auth.controller.js
    │   │   └── student.controller.js
    │   ├── middleware/
    │   │   ├── auth.middleware.js
    │   │   └── error.middleware.js
    │   ├── routes/
    │   │   ├── auth.routes.js
    │   │   └── student.routes.js
    │   ├── service/
    │   │   ├── auth.service.js
    │   │   └── student.service.js
    │   └── main.routes.js
    ├── index.js
    └── package.json
```

The server follows a simple layered structure: a route receives the request, a controller handles it, a service talks to the database, and the error middleware builds the error response.

## How Authentication Works

```text
Register page --(name, email, password)--> POST /api/auth/register
                                              |  bcrypt.hash, saved in users

Login page ----(email, password)---------> POST /api/auth/login
                                              |  bcrypt.compare + jwt.sign
Login page <---------(token, user)-----------+
     |
     |  token saved in localStorage
     v
Axios interceptor adds: Authorization: Bearer <token>
     |
     v
authMiddleware verifies the token --> students routes
     |
     v
On a 401 response: token removed, user sent to the login page
```

1. **Register:** the password is hashed with bcrypt before it is saved. The real password is never stored.
2. **Login:** the server finds the user by email and compares the typed password with the saved hash. If it matches, the server signs a JWT that contains the user id and email.
3. **Requests:** the React app saves the token and sends it in the `Authorization` header of every students request, using an Axios request interceptor.
4. **Protection:** the auth middleware verifies the token before any students route runs. A missing, fake, or expired token gets a `401` response.
5. **Logout:** the token is removed from the browser, and the user returns to the login page.

## API Endpoints

| Method | Endpoint | Access | Description |
|---|---|---|---|
| POST | `/api/auth/register` | Public | Create an account |
| POST | `/api/auth/login` | Public | Log in and receive a token |
| GET | `/api/students` | Token required | List all students |
| GET | `/api/students/:id` | Token required | Get one student |
| POST | `/api/students` | Token required | Create a student |
| PUT | `/api/students/:id` | Token required | Update a student |
| DELETE | `/api/students/:id` | Token required | Delete a student |

Common error responses:

| Status | Meaning |
|---|---|
| `400` | A required field is missing or invalid |
| `401` | Wrong email or password, or a missing, invalid, or expired token |
| `404` | The student was not found |
| `409` | The email already exists |

## Getting Started

### Prerequisites

- Node.js
- MySQL

### 1. Database

Create a database named `edumanage_db`, then create the two tables:

```sql
CREATE TABLE students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    course VARCHAR(100) NOT NULL
);

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL
);
```

### 2. Server

```bash
cd server
npm install
```

Create a `.env` file in the `server` folder. Use your own values, and never commit this file:

```env
# Database connection (use the variable names that config/db.js reads)
DB_HOST=
DB_USER=
DB_PASSWORD=
DB_NAME=edumanage_db

# Authentication
JWT_SECRET=
JWT_EXPIRES_IN=1d
```

Generate a long random value for `JWT_SECRET` with:

```bash
node -e "console.log(require('crypto').randomBytes(48).toString('hex'))"
```

Start the server:

```bash
node index.js
```

The API runs on `http://localhost:3000`. Use `nodemon index.js` during development to restart it automatically.

### 3. Client

```bash
cd client
npm install
npm run dev
```

Open `http://localhost:5173`, create an account on the register page, and log in.

The client calls the API at `http://localhost:3000`, and the server accepts requests from `http://localhost:5173`. Both addresses are written directly in the code.

## Security Notes and Limitations

- **Hashed passwords:** bcrypt is used with a cost factor of 10.
- **Same message for both failures:** a wrong email and a wrong password return the same `Invalid email or password` message, so the response does not reveal which emails exist.
- **Token storage:** the token is kept in `localStorage`. This is simple and works well for a learning project, but an `httpOnly` cookie is safer against XSS in a real application.
- **Real protection is on the server:** the `ProtectedRoute` in React only improves the experience. The auth middleware is what actually blocks unauthorized requests.
- **No roles:** every registered user can manage every student, and registration is public.
- **Not included:** refresh tokens, automated tests, and environment-based API URLs.

## Core Takeaway

> Authentication has two sides: the server must verify every request, and the frontend only improves the experience.