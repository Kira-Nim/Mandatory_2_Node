fetch("/api/projects")
.then(response => response.json())
.then(({ projects }) => {
    const projectsWrapperDiv = document.getElementById("projects-wrapper");

    projects.map(project => { 

        // Html for showing list of projects
        const projectDiv = document.createElement("div");
        projectDiv.innerHTML = `
        <span>Description: ${escapeHTML(project.name)}</span> 
        <a href="./editProject"><img class="edit-image" src="../assets/edit-image"></a>
        <img class="delete-image" src="../assets/delete-image">
        `;
        projectsWrapperDiv.appendChild(projectDiv);
    });

        // Html for creating new project
        const createProjectDiv = document.createElement("div");
        createProjectDiv.innerHTML = `<a href = "./editProject">New Project</a>`;
        projectsWrapperDiv.appendChild(createProjectDiv);
});