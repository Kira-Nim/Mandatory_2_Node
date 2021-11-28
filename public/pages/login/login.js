fetch("/api/login", {
    method: "POST",
    headers: { "Content-type": "application/json; charset=UTF-8" },
    body: JSON.stringify({
        name: document.getElementById("username").value,
        email: document.getElementById("password").value
    })  
}).then(response => {

    // hvad der sker i forbindelse med login
});

document.getElementById("login-button").addEventListener("click", sendLoginMessage);