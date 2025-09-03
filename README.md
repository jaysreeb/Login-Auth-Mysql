# Node.js Authentication API (MySQL + JWT)

A mini authentication system built with **Node.js**, **Express**, **MySQL (mysql2)**, **bcrypt**, and **JWT**.  
It covers user registration, login, and token-based authentication with security best practices.  

---

## Features
- User registration (`/register`) with hashed passwords (bcrypt)
- User login (`/login`) with JWT authentication
- Secure password storage with salting
- Parameterized SQL queries to prevent SQL injection
- Environment variables with `.env`
- Organized architecture: routes, controllers, models
- JWT-based authentication with **3h expiry**

---

## Tech Stack
- **Backend:** Node.js, Express
- **Database:** MySQL (mysql2 with connection pool)
- **Auth & Security:** bcrypt, JWT
- **Tools:** dotenv, Postman (for API testing)

---

## 📂 Project Structure

    ├── app.js # Main app entry
    ├── routes/
    │       └── authRoutes.js  # API routes
    ├── controllers/
    │        └── authController.js  # Request handlers
    ├── models/
    │ └── userModel.js  # DB queries
    ├── db.js # MySQL pool setup
    ├── .env 
    └── package.json
---

## Setup & Installation
   git clone https://github.com/jaysreeb/Login-Auth-Mysql.git
   

## Install dependencies:
    npm install

## Create a .env file:
    DB_HOST
    DB_USER
    DB_PASS
    DB_NAME
    JWT_SECRET

## Import the MySQL schema:
    CREATE DATABASE auth_api;
    USE auth_api;

    CREATE TABLE users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(50) NOT NULL,
        email VARCHAR(100) UNIQUE NOT NULL,
        password VARCHAR(255) NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

## Future Improvements

    Add role-based auth (admin/user)
    Refresh tokens for longer sessions
    Rate limiting for brute-force protection
    Store JWT in HTTP-only cookies (frontend integration)

## Screenshots

![alt text](<Login auth api.png>) 

![alt text](<login 1.png>)





