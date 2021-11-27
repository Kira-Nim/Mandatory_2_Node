// Import module that can be used to make a connection to db
import dbconnection from "../database/connectSqlite.js";

import express from "express";
const router = express.Router();

router.post("/api/user", async (req, res) => {

    // get data from req body
    username = req.body.username;
    password = req.body.password;
    
    // Code for validating login here

    res.send();
});

export default router;