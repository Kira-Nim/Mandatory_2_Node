// module for working with files. 
import fs from "fs";


// Read file (synchronously). create a String containing all from the html file
const nav = fs.readFileSync("./public/components/nav/nav.html", "utf8");
const footer = fs.readFileSync("./public/components/footer/footer.html", "utf8");

// create and return String containing what is in paht (html) with nav and footer incerted
function createPage(path, options) {
    return (nav + fs.readFileSync(`./public/pages/${path}`, "utf8") + footer)
            .replace("%%DOCUMENT_TITLE%%", options?.title || "Nodefolio")
            .replace("%%SCRIPT_PLACEHOLDER%%", options?.scriptTag || "");
}

// Make the createPage metod acceseble with "require" from other js files.
export default createPage; 