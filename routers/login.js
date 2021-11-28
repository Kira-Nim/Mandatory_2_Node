// Import module that can be used to make a connection to db
import connection from "../database/connectSqlite.js";

import express from "express";

const router = express.Router();

router.post("/api/login", async (req, res) => {

    // get array of objects - one object for each user containing att. for each column
    const userArray = await connection.all("SELECT * from user");
    const user = userArray[0]
   
    if(req.body.username == user.username && req.body.password == user.password){

        req.session.userid = user.id;

        res.send(`Hey there, welcome <a href=\'/logout'>click to logout</a>`);
    }
    else{
        res.send('Invalid username or password');
    }
});

export default router ;