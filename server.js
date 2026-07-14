// ======================================================
// Day 12 - Express Assignments
// Full Stack Developer Internship
// ======================================================

const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// ======================================================
// Middleware
// ======================================================

app.use(express.json());

app.use((req, res, next) => {

    const currentTime = new Date().toLocaleTimeString();

    console.log(`[${currentTime}] ${req.method} ${req.url}`);

    next();

});

// ======================================================
// Serve Static Files
// ======================================================

app.use(express.static(path.join(__dirname, "public")));

// ======================================================
// Home Page
// ======================================================

app.get("/", (req, res) => {

    res.sendFile(path.join(__dirname, "public", "index.html"));

});

// ======================================================
// Contact Page
// ======================================================

app.get("/contact", (req, res) => {

    res.sendFile(path.join(__dirname, "public", "contact.html"));

});

// ======================================================
// Users Page
// ======================================================

app.get("/users", (req, res) => {

    res.sendFile(path.join(__dirname, "public", "users.html"));

});

// ======================================================
// Weather Page
// ======================================================

app.get("/weather", (req, res) => {

    res.sendFile(path.join(__dirname, "public", "weather.html"));

});

// ======================================================
// Weather API
// ======================================================

app.get("/weather/:city", (req, res) => {

    const city = req.params.city;

    const weatherData = {

        Delhi: "30°C",
        Mumbai: "29°C",
        Goa: "31°C",
        Pune: "28°C",
        Bangalore: "26°C"

    };

    res.json({

        city: city,

        temperature: weatherData[city] || "Temperature Not Available"

    });

});

// ======================================================
// Users Data
// ======================================================

let users = [

    {
        id: 1,
        name: "Rahul"
    },

    {
        id: 2,
        name: "Aditi"
    }

];

// ======================================================
// GET Users API
// ======================================================

app.get("/api/users", (req, res) => {

    res.json(users);

});

// ======================================================
// POST Users API
// ======================================================

app.post("/api/users", (req, res) => {

    const newUser = {

        id: users.length + 1,

        name: req.body.name

    };

    users.push(newUser);

    res.status(201).json({

        message: "User Added Successfully",

        user: newUser

    });

});

// ======================================================
// 404 Page
// ======================================================

app.use((req, res) => {

    res.status(404).send("<h1>404 - Page Not Found</h1>");

});

// ======================================================
// Start Server
// ======================================================

app.listen(PORT, () => {

    console.log("========================================");

    console.log("Express Assignments Server Started");

    console.log(`Server running at http://localhost:${PORT}`);

    console.log("========================================");

});