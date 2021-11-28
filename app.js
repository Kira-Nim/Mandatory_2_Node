// Import express module
// same result as (allmost): const express = require('express') 
import express from "express";

// For session management
import cookieParser from "cookie-parser";
import sessions from "express-session";

// module for working with files.
import fs from "fs";

// Import the module object from which it is possible to get a config obj made in the projects.js file
// This can be used to get acces to an endpoint defined in the projects.js file
import projectsRouter from "./routers/projects.js";

// 
import pagesRouter from "./routers/pages.js";

//
import contactRouter from "./routers/contact.js";

import loginRouter from "./routers/login.js";

// Using the destructuring assignment operator ({} =) 
// to get the createPage method from the render.js module
    // This is the same as:
        // createPageWrapperObj = require("./render.js")
        // createPage = createPageWrapperObj.createPage
import createPage from "./render.js";

// call the library to get an app obj which will be used to configure the server
const app = express() 

// var with value port number. Find portnumber in invironment or use 8080 as default.
const PORT = process.env.PORT || 8080

// creating 24 hours from milliseconds
const cookieMaxAge = 1000 * 60 * 60 * 24;

// add express session config
app.use(sessions({
    secret: "thisismysecrctekeyabcd1984wir767",
    saveUninitialized: true,
    cookie: { maxAge: cookieMaxAge },
    resave: false 
}));

// set cookie parser middleware
app.use(cookieParser());

// express.static("public") 
// --> returns a component that can take care of serving given static files to client.
// app.use() 
// --> configure the server to use the above mentioned component.
app.use(express.static("public"));

// configure server to parse json input from user to js objects
app.use(express.json());

// configure server so that it makes sure that a given String only consist of "allowed" characters
// urlencoded is a method that enables out server to decode url's that have been encoded by the client
// (encoded to not contain any String characters which is not allowed in an url)
// data send through a html form will be encoded before it is sent.
app.use(express.urlencoded({ extended: true }));

// Configure the server to use the config obj from require above
app.use(projectsRouter);
app.use(pagesRouter);
app.use(contactRouter);
app.use(loginRouter);

// ready pages by calling createPage, a method defined in render.js (which has been imported)
const frontpagePage = createPage("frontpage/frontpage.html", { 
    title: "Nodefolio | Welcome"
});
const CVPage = createPage("CVPage/CVPage.html");
const projectsPage = createPage("projects/projects.html");
const contactPage = createPage("contact/contact.html");

// Read page (synchronously). create a String containing all from the login.html file
const loginPage = fs.readFileSync("./public/pages/login/login.html", "utf8");

// Register endpoint for frontpage
app.get("/", (req, res) => {

    // send and not send file because it is a Sting given as param (sendFile if param is a path)
    res.send(frontpagePage);
});

// Register endpoint for projects page
app.get("/projects", (req, res) => {
    res.send(projectsPage);
});

// Register endpoint for contact page
app.get("/contact", (req, res) => {
    res.send(contactPage);
});

// Register endpoint for cv page
app.get("/cv", (req, res) => {
    res.send(CVPage);
});

// Register endpoint for login page
app.get("/login", (req, res) => {
    res.send(loginPage);
});

/* Register what port the server should be listening on and open it.
    Install "cross-env" in package.json as dependensy. 
    (dependency and not dev-dep because it is valueble for the costumers system administrator,
    who is going to deploy notefolio to access a env-variable instead of using a hardcoded portnumber.*/
app.listen(PORT, (error) => {
    console.log(`app listening at http://localhost:${PORT}`)
})


/* Test:
            const projectName = "Kira";
            const date = "08-03-1984";
            const description = "bla bla bla";
            const githubLink = "linklink";
            const deployedLink = "linkjjjjjjj";
            const myString = `INSERT INTO projects (name, date, description, githubLink, deployedLink) VALUES (` + `'${projectName}', '${date}', '${description}', '${githubLink}', '${deployedLink}')`;
            console.log("String test:");
            console.log(myString); 
*/

// session tutorial: https://www.section.io/engineering-education/session-management-in-nodejs-using-expressjs-and-express-session/