

// if the project shown is a project to be edited incert info about this project.
if(getId() != null){
    getProjectById()
}

// get single project
function getProjectById(){

    fetch(`/api/projects/${getId()}`)
    .then( response => response.json())
    .then( project => { 
        // Incert values from project into the html elements used for input
        document.getElementById("name").value = project.name;
        document.getElementById("description").value = project.description;
        document.getElementById("githubLink").value = project.github_link;
        document.getElementById("deployedLink").value = project.deployed_link;

        // format the string to be shown in html input element with type date and set value
        const dateStringArray = project.date.split("-")
        date = dateStringArray[2] + "-" + dateStringArray[1] + "-" + dateStringArray[0];
        document.getElementById("date").value = date;

        // Set projectname as header
        const header = document.getElementById("project-header").innerHTML = project.name;
    })
}


// Callback for saving edited or created project to db
function saveProject() {
    
    // Determin whether it is a post or a patch action
    let fetchMethod = "POST";
    if(getId() != null){
        fetchMethod = "PATCH";
    }

    console.log("fetchMethod: " + fetchMethod);

    fetch(getPath(), {
        method: fetchMethod,
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

            document.location.href = href="/dashboard/";

        } else {
            
            console.log("Error creating or updating project", response.status);
        }
    });
}

// Function that returns the a path to post to depending on the current window url path
function getPath(){

    // Get the currenpath part of the url
    const currentPathName = window.location.pathname

    // Identify whether it is a create or update path. Use this to return a corresponding endpoint.
    currentPathArray = currentPathName.split("/");

    if (currentPathArray[2] === "editProject"){
        path = `/api/projects/${currentPathArray[3]}`; 
    } else if (currentPathArray[2] === "createProject"){
        path = "/api/projects"; 
    }
    return path;
};

// Function for getting the id if the project already exists else return "new".
function getId(){
    pathArray = getPath().split("/");

    const id = pathArray[pathArray.length - 1];

    if(id === "projects"){
        return null;
    }
    return id;
}

document.getElementById("saveProject-button").addEventListener("click", saveProject);

