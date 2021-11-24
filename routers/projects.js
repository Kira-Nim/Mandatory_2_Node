// Import module express and call method Router() on it
// The value stored in router is a configuration object that will be used 
// by the app configuration object in app.js file, to set up this file so that it can contain endpoints.
const router = require("express").Router();

// Array of js objects containing hardcoded data that should later come from db.
const projects = [
    { name: "Node.js Recap", category: "Node.js", technologies: ["Node.js", "Html", "CSS"] },
    { name: "Nodefolio", category: "Node.js", technologies: ["Node.js", "Html", "CSS"] },
    { name: "Adventure XP", category: "Java", technologies: ["Java", "Thymeleaf", "CSS", "MySQL"] }
];

// endpoint 
router.get("/api/projects", (req, res) => {
    res.send({ projects });
});

// Set export att. on module to contain the router config obj. from above.
// This is what can be accesed with "require" from other js files.
module.exports = {
    router
};