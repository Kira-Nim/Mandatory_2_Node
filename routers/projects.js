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

// endpoint for saving new project to db
router.post("/api/createProject", async (req, res) => {

    // get data from req body
    const projectName = req.body.name;
    const date = req.body.date;
    const description = req.body.description;
    const githubLink = req.body.githubLink;
    const deployedLink = req.body.deployedLink;

    // create project with values from req body variables above.
     connection.run(`INSERT INTO projects (name, date, description, github_link, deployed_link) VALUES (` + `'${projectName}', '${date}', '${description}', '${githubLink}', '${deployedLink}')`);

     console.log(".....");
     console.log("the endpoint for creating a new project has been reach and the new project has been saved to db");
     console.log(".....");
     
    res.send();
});

// endpoint for updating project in db
router.post("/api/updateProject", async (req, res) => {

    console.log(".....");
    console.log("the endpoint for updating project has been reached but project has not been updated due to missing implementation of update project");
    console.log(".....");

    res.send();
});

// Set export att. on module to contain the router config obj. from above.
// This is what can be accesed with "require" from other js files.
export default router;