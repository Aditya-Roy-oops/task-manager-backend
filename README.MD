# Task Manager Backend API

This project is a backend service for a simple task management system.
Users log in using an email OTP and then can securely manage their own tasks.

The focus of this assignment was clean API design, authentication flow, proper access control, logging, and documentation.

---

## 🌐 Live Links

**Hosted API**
https://task-manager-backend-1-q9j3.onrender.com/

**Swagger Documentation**
https://task-manager-backend-1-q9j3.onrender.com/docs

---

## 🧰 Tech Stack

* Node.js
* Express.js
* MySQL (Railway Database)
* JWT Authentication
* OTP Based Login (simulated)
* Swagger API Documentation

---

## ✨ Features

### Authentication

* Email based OTP login
* Short-lived JWT access token
* Protected routes

> For assignment testing, OTP is printed in the server console instead of sending a real email.

---

### Task Management

After authentication a user can:

* Create a task
* View their tasks
* Update a task
* Delete a task

Users cannot access tasks belonging to other users.

---

### Security & Middleware

* JWT Authentication middleware
* Authorization per user
* Input validation
* Rate limiting
* Centralized error handler

---

### Activity Logging

The system stores logs in database:

* Login attempts
* Task creation/update/delete
* API access events

---

## 🚀 How To Use (Swagger Testing Guide)

Open Swagger:
https://task-manager-backend-1-q9j3.onrender.com/docs

Follow these steps exactly:

---

### Step 1 — Generate OTP

`POST /auth/send-otp`

Body:

```
{
  "email": "test@gmail.com"
}
```

Check server logs (Render logs) → you will see:

```
OTP FOR TESTING: 123456
```

---

### Step 2 — Verify OTP

`POST /auth/verify-otp`

Body:

```
{
  "email": "test@gmail.com",
  "otp": "123456"
}
```

Response:

```
{
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
}
```

Copy the **accessToken**

---

### Step 3 — Authorize Swagger

Click the **Authorize 🔒 button** (top right)

Paste:

```
Bearer <accessToken>
```

Example:

```
Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

Click **Authorize → Close**

Now all protected routes will work.

---

### Step 4 — Create Task

`POST /tasks`

```
{
  "title": "My first task",
  "description": "Testing API",
  "status": "pending"
}
```

---

### Step 5 — Get Tasks

`GET /tasks`

You will receive your tasks list.

---

### Step 6 — Update Task

`PUT /tasks/{id}`

---

### Step 7 — Delete Task

`DELETE /tasks/{id}`

---

## 💻 Run Locally

```
git clone <repo-url>
cd task-manager-backend
npm install
```

Create `.env` file:

```
PORT=5000

DB_HOST=
DB_PORT=
DB_USER=
DB_PASSWORD=
DB_NAME=

JWT_SECRET=
JWT_REFRESH_SECRET=
```

Start server:

```
npm run dev
```

Local URLs:

```
http://localhost:5000
http://localhost:5000/docs
```

---

## 🗄 Database Tables

Automatically created:

* users
* otps
* tasks
* logs

---

## 🧠 Design Decisions

* OTP authentication used instead of password for simplicity
* JWT for stateless secure sessions
* Middleware architecture for scalability
* Separate controllers/models/routes for clean structure
* Logging added for audit tracking

---

## 📌 Assumptions

* Email sending simulated through console
* One active session per user is acceptable
* Basic rate limiting sufficient for assignment scope

---

## Author

Backend Assignment Submission
