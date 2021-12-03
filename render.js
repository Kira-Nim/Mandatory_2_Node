// module for working with files. 
import fs from "fs";

// Read file (synchronously). create a String containing all from the html file
const nav = fs.readFileSync("./public/components/nav/nav.html", "utf8");
const footer = fs.readFileSync("./public/components/footer/footer.html", "utf8");

// create and return String containing what is in paht (html) with nav and footer incerted
function createPage(path, options) {

    let dynamicNavHtmlString = `
    <a class="navText" href = "/login">Log in</a>
    `;

    if(options?.session?.userid){
        dynamicNavHtmlString = `
        <div class="navDropdown navText">
            <p>${options?.session.username || "Account"}</p>
            <div class="navDropdown-content">
                <form action ="/logout" method="post">
                    <input class="navLinkStyle navLogoutStyle" type="submit" value="Log out"></input>
                </form>
                <a class="navLinkStyle" href = "/dashboard">Manage content</a>
            </div>
        </div>
        `
    };

    return (nav + fs.readFileSync(`./public/pages/${path}`, "utf8") + footer)
            .replace("%%DOCUMENT_TITLE%%", options?.title || "Nodefolio")
            .replace("%%SCRIPT_PLACEHOLDER%%", options?.scriptTag || "")
            .replace("%%DYNAMIC_ITEMS_PLACEHOLDER%%", dynamicNavHtmlString)
            .replace("%%CASUAL_INTRO_PLACEHOLDER%%", options?.casualIntro)
            .replace("%%CASUAL_INTRO_HEADER_PLACEHOLDER%%", options?.introHeader)
            .replace("%%FORMAL_INTRO_PLACEHOLDER%%", options?.formalIntro)
            .replace("%%INTRO_HEADER_PLACEHOLDER%%", options?.introHeader)
            .replace("%%COMPETENCIES_LIST_PLACEHOLDER%%", options?.competencies);
            

}

// Make the createPage metod acceseble with "require" from other js files.
export default createPage; 


