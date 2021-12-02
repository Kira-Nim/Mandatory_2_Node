
// get projects
fetch("/api/projects")
.then(response => response.json())
.then(({ projects }) => {
    const projectsWrapperDiv = document.getElementById("projects-wrapper");

    projects.map(project => { 
        const projectDiv = document.createElement("div");

        projectDiv.innerHTML = `
            <h3>${escapeHTML(project.name)}</h3>
            <p>Date: ${escapeHTML(project.date)}</p>
            <p>Description: ${escapeHTML(project.description)}</p>
            <p>Links:</p>
            <p><a href = "${escapeHTML(project.github_link)}">${escapeHTML(project.github_link)} </a></p>
            <p><a href ="${escapeHTML(project.deployed_link)}">${escapeHTML(project.deployed_link)}</a></p>
        `;

        projectsWrapperDiv.appendChild(projectDiv);

    });
});