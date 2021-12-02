
function sendLoginRequest() {

    console.log("function sendLoginRequest() has been run...")

    fetch("/api/login", {
        method: "POST",
        headers: { "Content-type": "application/json; charset=UTF-8" },
        body: JSON.stringify({
            username: document.getElementById("username").value,
            password: document.getElementById("password").value,
        }), 
        credentials: 'include'
    }).then(response => {
        if (response.status === 200) {

            console.log("Statuscode 200 recieved - login went well");

            document.location.href = href="/";

        } else if(response.status === 401) {
            
            console.log("Statuscode 401 recieved - Unauthenticated user");
        }
    });
}

document.getElementById("login-button").addEventListener("click", sendLoginRequest);