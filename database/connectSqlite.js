import sqlite3 from "sqlite3";
import { open } from "sqlite";

let connection;

// With the newer versions of note it is no longer a requirement for await to be inside an async function.
// await open() --> takes an object with config and returns an "open" object (connection obj) 
//            that can be used to gain acces to db
connection = await open({
    filename: "./nodefolio.db",
    driver: sqlite3.Database
});

// Default can only work when it is only one thing to be exported.
// When import is used from another file, then this connection will be the default value accesable.
export default connection;







// Notes on async-await:
    // async --> This function will return a promise if ever it encounters an await.
    // await --> this function (second function) is linked to the function from which it is called (first function). 
    //           A) The first function gets a promise in return and can continue running.
    //           B) The second function, which has called a third function with the await keyword
    //               cannot continue until the third function has returned.
    //           C) When the third function returns then the second function can continue.
    //           D) When the second function returns then the "then" in the first function
    //              is set in motion.
