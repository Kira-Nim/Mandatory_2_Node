// Import module that can be used to make a connection to db
import connection from "../database/connectSqlite.js";

// Import module express and call method Router() on it
// The value stored in router is a configuration object that will be used 
// by the app configuration object in app.js file, to set up this file so that it can contain endpoints.
import express from "express";
const router = express.Router();

// endpoint for getting all projects
router.get("/api/projects", async (req, res) => {

    // get array of objects - one object for each project containing att. for each column
    const projects = await connection.all("SELECT * from projects");
    
    res.send({ projects });
});

// endpoint for getting one specific project 
router.get("/api/projects/:id", async (req, res) => {

    const projectId = req.params.id;

    // Get projects with given id
    const project = await connection.get("SELECT * FROM projects WHERE id = ?", projectId);

    res.send(project);
});

// endpoint for creating a project
router.post("/api/projects", async (req, res) => {

    const name = req.body.name;
    const date = req.body.date;
    const description = req.body.description;
    const githubLink = req.body.githubLink;
    const deployedLink = req.body.deployedLink;

    //const queryString = "INSERT INTO projects (name, date, description, github_link, deployed_link) VALUES (?, ?, ?, ?, ?)";
    //connection.run(queryString, name, date, description, githubLink, deployedLink);
    
    const queryString = "INSERT INTO projects (name, date, description, github_link, deployed_link) VALUES (?, ?, ?, ?, ?)";
    connection.run(queryString, name, date, description, githubLink, deployedLink);
    
    
    res.send();
});

// endpoint for updating project
router.patch("/api/projects/:id", async (req, res) => {

    const projectId = req.params.id;
    const name = req.body.name;
    const date = req.body.date;
    const description = req.body.description;
    const githubLink = req.body.githubLink;
    const deployedLink = req.body.deployedLink;

    const queryString = "UPDATE projects SET name = ?, date = ?, description = ?, github_link = ?, deployed_link = ? WHERE id = ?"; 
    connection.run(queryString, name, date, description, githubLink, deployedLink, projectId); 

    res.send();
});

// endpoint for deleting project
router.delete("/api/projects/:id", async (req, res) => {   

    connection.run(`DELETE FROM projects WHERE id = ${req.params.id}`)

    res.send();
});

export default router; 



