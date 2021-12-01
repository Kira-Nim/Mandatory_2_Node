fetch("/api/projects")
.then(response => response.json())
.then(({ projects }) => {
    const projectsWrapperDiv = document.getElementById("projects-wrapper");
    projectsWrapperDiv.className = "container projectsContainer";

    const projectsHeaderDiv = document.createElement("h2");
    projectsHeaderDiv.className = "row headerText";
    projectsHeaderDiv.innerHTML ="Projects";
    projectsWrapperDiv.appendChild(projectsHeaderDiv);

    projects.map(project => { 

        // Html for showing list of projects
        const projectDiv = document.createElement("div");
        projectDiv.className = "row projectRow";
        projectDiv.innerHTML = `
        <div class ="col-10 projectCol">
        <span>${escapeHTML(project.name)}</span> 
        </div>
        <div class="col-1 projectCol">
        <a href="./editProject/${project.id}"><img class="editDeleteImage" src="../assets/editImage.png"></a>
        </div>
        <div class="col-1 projectCol">
        <img onclick="deleteProject(${project.id})" class="editDeleteImage" src="../assets/deleteImage.png">
        </div>
        `;
        projectsWrapperDiv.appendChild(projectDiv);
    });

        // Html for creating new project
        const createProjectColDiv = document.createElement("div");
        createProjectColDiv.className = "col-12 projectCol"
        createProjectColDiv.innerHTML = `<div class="newProjectLink"><a href = "./createProject">New Project</a></div>`;
        
        const createProjectRowDiv = document.createElement("div");
        createProjectRowDiv.className = "projectRow"

        createProjectRowDiv.appendChild(createProjectColDiv);
        projectsWrapperDiv.appendChild(createProjectRowDiv);

        const deleteElement = document.getElementById("deleteImage");
});

// function for deleting project
function deleteProject(projectId) {
    fetch(`/api/projects/${projectId}`, {
        method: "DELETE",
        headers: { "Content-type": "application/json; charset=UTF-8" },
        body: JSON.stringify({
            id: projectId,
        })  
    }).then(response => {
        if (response.status === 200) {
            console.log("Project deleted succesfully");

            document.location.href = href="/dashboard/";

        } else {
            
            console.log("Error sending the contact message", response.status);
        }
    });
}