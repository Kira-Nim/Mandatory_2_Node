// Import express module
const express = require('express') 

// Import the module object from which it is possible to get a config obj made in the projects.js file
// This can be used to get acces to an endpoint defined in the projects.js file
const projectsRouter = require("./routers/projects.js");

// module for working with files. 
const fs = require("fs");

// call the library to get an app obj which will be used to configure the server
const app = express() 

// var with value port number. Find portnumber in invironment or use 8080 as default.
const PORT = process.env.PORT || 8080

// express.static("public") 
// --> returns a component that can take care of serving given static files to client.
// app.use() 
// --> configure the server to use the above mentioned component.
app.use(express.static("public"));

// Configure the server to use the config obj made in the projects.js 
// which can be used to get acces to an endpoint defined in the projects.js
app.use(projectsRouter.router);

// Read file (synchronously). create a String containing all from the html file
const frontpage = fs.readFileSync("./public/pages/frontpage/frontpage.html", "utf8");
const projects = fs.readFileSync("./public/pages/projects/projects.html", "utf8");
const nav = fs.readFileSync("./public/components/nav/nav.html", "utf8");
const footer = fs.readFileSync("./public/components/footer/footer.html", "utf8");

// Ready the pages by inserting nav and footer into the main html pages (ex. frontpage and projectpage)
const frontpageTemplate = nav + frontpage + footer;
const projectsTemplate = nav + projects + footer;

// Register endpoint for frontpage
app.get("/", (req, res) => {

    // send and not send file because it is a Sting given as param (sendFile if param is a path)
    res.send(frontpageTemplate);
});

// Register endpoint for projects page
app.get("/projects", (req, res) => {
    res.send(projectsTemplate);
});

/* Register what port the server should be listening on and open it.
    Install "cross-env" in package.json as dependensy. 
    (dependency and not dev-dep because it is valueble for the costumers system administrator,
    who is going to deploy notefolio to access a env-variable instead of using a hardcoded portnumber.*/
app.listen(PORT, (error) => {
    console.log(`app listening at http://localhost:${PORT}`)
})


