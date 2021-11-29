// by default the saveProjct callback will med a post to "/api/createProject"
// unless the end of the url used to get to this site was "/createEditProject"
// Then the post will be made to "/api/updateProject".
/* const path = "/api/createProject";
if(window.location.pathname === createEditProject){
    path = "/api/updateProject"; 
}
*/

function saveProject() {
    fetch("/api/createProject", {
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

            document.location.href = href="../dashboard/";

        } else {
            
            console.log("Error sending the contact message", response.status);
        }
    });
}

document.getElementById("saveProject-button").addEventListener("click", saveProject);