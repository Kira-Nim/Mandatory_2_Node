// Import express 
const express = require('express') 


// call the library to get an app obj which will be used to configure the server
const app = express() 

// var with value port number. Find portnumber in invironment or use 8080 as default.
const PORT = process.env.PORT || 8080

// 
app.use(express.static("public"));

// Register endpoint for frontpage.html
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/frontpage/frontpage.html");
});

// Register endpoint for projects.html
app.get("/projects", (req, res) => {
    res.sendFile(__dirname + "/public/projects/projects.html");
});


/* Register what port the server should be listening on and open it.
    Install "cross-env" in package.json as dependensy. 
    (dependency and not dev-dep because it is valueble for the costumers system administrator,
    who is going to deploy notefolio to access a env-variable instead of using a hardcoded portnumber.*/
app.listen(PORT, (error) => {
    console.log(`app listening at http://localhost:${PORT}`)
})


