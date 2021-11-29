import connection from "./connectSqlite.js";

// Could have declared a function and then called this function instead of this.
// Might have been more readable. 
(async () => {

    await connection.exec("DROP TABLE IF EXISTS projects");
    await connection.exec("DROP TABLE IF EXISTS user");

    const nodefolioTablesSchema = `
        CREATE TABLE projects (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            date DATE,
            description TEXT,
            github_link TEXT,
            deployed_link TEXT
        ); 
    `;

    const tempScheme_1 = `CREATE TABLE user (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        username TEXT NOT NULL,
        password TEXT NOT NULL);
        `;

    const tempScheme_2 = `INSERT INTO projects (name, date, description, github_link, deployed_link) VALUES ('My Project', '08-03-1984', 'bla bla bla bla bla bla', 'link.com', 'link2.com');`;
    const tempScheme_4 = `INSERT INTO projects (name, date, description, github_link, deployed_link) VALUES ('My Project2', '08-03-1984', 'bla bla bla bla bla bla', 'link.com', 'link2.com');`;

    const tempScheme_3 = `INSERT INTO user (username, password) VALUES ('user1234', '1234');`;
    
    await connection.exec(nodefolioTablesSchema);
    await connection.exec(tempScheme_1);
    await connection.exec(tempScheme_2);
    await connection.exec(tempScheme_3);
    await connection.exec(tempScheme_4);
})()  

