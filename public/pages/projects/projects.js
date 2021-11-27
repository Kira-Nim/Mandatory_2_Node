
// get projects
fetch("/api/projects")
.then(response => response.json())
.then(({ projects }) => {
    const projectsWrapperDiv = document.getElementById("projects-wrapper");

    projects.map(project => { 
        const projectDiv = document.createElement("div");

        projectDiv.innerHTML = `
            <h3>${escapeHTML(project.name)}</h3>
            <p>Description: ${escapeHTML(project.date)}</p>
            <p>Description: ${escapeHTML(project.description)}</p>
            <p>Github Link: ${escapeHTML(project.github_link)}</p>
            <p>Link: ${escapeHTML(project.deployed_link)}</p>
        `;

        projectsWrapperDiv.appendChild(projectDiv);

    });
});