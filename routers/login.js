// Import module that can be used to make a connection to db
import connection from "../database/connectSqlite.js";

import express from "express";

const router = express.Router(); 

router.post("/api/login", async (req, res) => {

    // get array of objects - one object for each user containing att. for each column
    const userArray = await connection.all("SELECT * from user");
    const user = userArray[0];

    if(req.body.username === user.username && req.body.password === user.password){

        req.session.userid = user.id;
        req.session.username = user.username;

        res.status(200).send();

        console.log("User authentification in order");
    }
    else{
        res.status(401).send(); // Status code 401: "UNAUTHORIZED" (NB! really means unauthenticated) 

        console.log("Login failed du to unauthenticated user credentials");
    }
});

export default router ;