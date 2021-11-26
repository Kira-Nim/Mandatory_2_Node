import sqlite3 from "sqlite3";
import { open } from "sqlite";


// function for connecting to db
// export --> Make the this function acceseble with "import" from other js files.
// open() --> takes an object with config and returns an "open" object (connection obj) 
//            that can be used to gain acces to db
// async --> This function will return a promise if ever it encounters an await.
// await --> this function (second function) is linked to the function from which it is called (first function). 
//           A) The first function gets a promise in return and can continue running.
//           B) The second function, which has called a third function with the await keyword
//               cannot continue until the third function has returned.
//           C) When the third function returns then the second function can continue.
//           D) When the second function returns then the "then" in the first function
//              is set in motion.
export async function connectSqlite() {
    return await open({
        filename: "./nodefolio.db",
        driver: sqlite3.Database
    });
}