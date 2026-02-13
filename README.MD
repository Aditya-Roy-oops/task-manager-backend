# Task Manager Backend – REGRIP Assignment

## Hosted URL

https://task-manager-backend-1-q9j3.onrender.com/

## Swagger Docs

https://task-manager-backend-1-q9j3.onrender.com/docs

---

## Tech Stack

* Node.js
* Express.js
* PostgreSQL (Railway)
* JWT Authentication
* Swagger API Documentation

---

## Features Implemented

### Authentication

* Email based OTP login (simulated)
* JWT access token
* Secure protected routes

### Task Management

* Create Task
* View Tasks
* Update Task
* Delete Task

### Security

* Authentication middleware
* Authorization per user
* Input validation
* Rate limiting
* Global error handler

### Logging

System logs stored in DB:

* Login attempts
* Task operations
* API usage

---

## Fake OTP Note

For assignment testing purposes, OTP is printed in server console instead of real email delivery.

---

## Environment Variables (.env)

```
PORT=5000

DB_HOST=
DB_USER=
DB_PASSWORD=
DB_NAME=
DB_PORT=

ACCESS_SECRET=
REFRESH_SECRET=
OTP_SECRET=
```

---

## Run Locally

```
git clone <repo>
cd task-manager-backend
npm install
npm run dev
```

Server runs at:

```
http://localhost:5000
http://localhost:5000/docs
```

---

## How to Test API

1. Generate OTP
   POST /auth/send-otp

2. Check server console → copy OTP

3. Verify OTP
   POST /auth/verify-otp

4. Copy access token

5. Click Authorize in Swagger and paste:
   Bearer <token>

6. Now use /tasks endpoints

---

## Design Decisions

* JWT used for stateless authentication
* OTP used instead of passwords for simplicity
* Middleware based architecture for scalability
* Separate controllers, services, models for clean structure
* Global error handler to avoid repetitive try/catch
* Swagger for clear API testing

---

## Assumptions

* Email sending simulated
* Single device login sufficient
* Basic rate limiting adequate for assignment
