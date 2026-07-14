# Express Assignments

## Overview

This project was developed as part of **Day 12** of the **Full Stack Developer Internship**.

It demonstrates the fundamentals of Express.js, including routing, middleware, static file serving, REST APIs, and handling JSON data.

---

## Features

- Express.js Server
- Middleware Logging
- Weather API
- Users API (GET & POST)
- Static Website
- Contact Page
- Dynamic Users Page
- Responsive Light Theme

---

## Technologies Used

- Node.js
- Express.js
- HTML5
- CSS3
- JavaScript
- npm
- Git
- GitHub

---

## Project Structure

```
ExpressAssignments
│
├── node_modules/
├── public/
│   ├── index.html
│   ├── contact.html
│   ├── users.html
│   ├── style.css
│   └── script.js
│
├── server.js
├── package.json
├── package-lock.json
└── README.md
```

---

## Installation

Clone the repository:

```bash
git clone https://github.com/Rocarina/express-assignments.git
```

Move into the project:

```bash
cd ExpressAssignments
```

Install dependencies:

```bash
npm install
```

---

## Run the Project

Start the server:

```bash
node server.js
```

Server URL:

```
http://localhost:3000
```

---

## Available Routes

| Route | Description |
|--------|-------------|
| `/` | Home Page |
| `/contact` | Contact Form |
| `/users` | Users Page |
| `/api/users` | Users API (JSON) |
| `/weather/:city` | Weather API |

---

## Example Weather API

```
GET /weather/Delhi
```

Response:

```json
{
    "city": "Delhi",
    "temperature": "30°C"
}
```

---

## Example Users API

```
GET /api/users
```

Response:

```json
[
    {
        "id": 1,
        "name": "Rahul"
    },
    {
        "id": 2,
        "name": "Aditi"
    }
]
```

---

## Learning Outcomes

- Express.js Routing
- Middleware
- REST API Development
- JSON Responses
- Static File Serving
- Fetch API
- Frontend & Backend Integration
- Version Control with Git & GitHub

---

## Author

**Tanvi Satej Verlecar**

GitHub: https://github.com/Rocarina

LinkedIn: https://www.linkedin.com/in/tanvi-verlecar-bab3a2259

---

## License

Developed for educational purposes as part of the Full Stack Developer Internship.