// Import module that can be used to make a connection to db
import connection from "../database/connectSqlite.js";

// Import module express and call method Router() on it
// The value stored in router is a configuration object that will be used 
// by the app configuration object in app.js file, to set up this file so that it can contain endpoints.
import express from "express";
const router = express.Router();

// endpoint for getting project data from db
router.get("/api/projects", async (req, res) => {

    // get array of objects - one object for each project containing att. for each column
    const projects = await connection.all("SELECT * from projects");
    
    console.log(projects);
    
    res.send({ projects });
});

// endpoint for saving project to db
router.post("/api/projects", async (req, res) => {

    // get data from req body
    projectName = req.body.name;
    date = req.body.date;
    description = req.body.description;
    githubLink = req.body.githubLink;
    deployedLink = req.body.deployedLink;

    // create project with values from req body variables above.
     connection.run(`INSERT INTO projects (name, date, description, githubLink, deployedLink) VALUES (` + `'${projectName}', '${date}', '${description}', '${githubLink}', '${deployedLink}')`);

    res.send();
});

// Set export att. on module to contain the router config obj. from above.
// This is what can be accesed with "require" from other js files.
export default router;