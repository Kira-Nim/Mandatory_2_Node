
function saveProjects() {
    fetch("/api/projects", {
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

            // redirect after showing a notification

        } else {
            
            console.log("Error sending the contact message", response.status);
        }
    });
}

document.getElementById("saveProject-button").addEventListener("click", "saveProject");