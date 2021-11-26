import { connectSqlite } from "./connectSqlite.js";

// Could have declared a function and then called this function instead of this.
// Might have been more readable. 
(async () => {
    const dbConnection = await connectSqlite();

    await dbConnection.exec("DROP TABLE IF EXISTS projects");
    await dbConnection.exec("DROP TABLE IF EXISTS user");

    const nodefolioTablesSchema = `
        CREATE TABLE projects (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            description TEXT NOT NULL,
            github_link TEXT,
            deployed_link TEXT
        )

        CREATE TABLE user (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT NOT NULL,
            password TEXT NOT NULL,
        )
    `;
    
    await dbConnection.exec(nodefolioTablesSchema);
})()  