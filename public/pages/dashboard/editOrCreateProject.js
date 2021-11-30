
function saveProject() {

    fetch(getPath(), {
        method: "POST",
        headers: { "Content-type": "application/json; charset=UTF-8" },
        body: JSON.stringify({
            name: document.getElementById("name").value,
            date: document.getElementById("date").value,
            description: document.getElementById("description").value,
            githubLink: document.getElementById("githubLink").value,
            deployedLink: document.getElementById("deployedLink").value
        })  
    }).then(response => {
        if (response.status === 200) {
            console.log("Everything went well");

            //document.location.href = href="../dashboard/";

        } else {
            
            console.log("Error sending the contact message", response.status);
        }
    });
}

// Method that helps identyfy whether to respond with an create or update post when a project is saved to db.
function getPath(){

    // Get the currenpath part of the url
    const currentPathName = window.location.pathname

    // Identify whether it is a create or update path. Use this to return a corresponding endpoint.
    currentPathArray = currentPathName.split("/");

    if (currentPathArray[2] === "editProject"){
        path = "/api/updateProject"; 
    }
    else if (currentPathArray[2] === "createProject"){
        path = "/api/createProject"; 
    }
    return path;
};

document.getElementById("saveProject-button").addEventListener("click", saveProject);