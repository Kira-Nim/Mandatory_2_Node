// Import module that can be used to make a connection to db
import connection from "../database/connectSqlite.js";

import express from "express";
const router = express.Router();


router.post("/api/user", async (req, res) => {

    session = req.session;

    if(session.userid){
        res.send("Welcome User <a href=\'/logout'>click to logout</a>");
    }else
    res.sendFile('views/index.html',{root:__dirname})


    
    // Code for validating login here

    res.send();
});

export {router, session} ;