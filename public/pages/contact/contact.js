function sendContactMessage() {
    fetch("/api/contact", {
        method: "POST",
        headers: { "Content-type": "application/json; charset=UTF-8" },
        body: JSON.stringify({
            name: document.getElementById("name").value,
            email: document.getElementById("email").value,
            phone: document.getElementById("phone").value,
            name: document.getElementById("message").value,
        })  
    }).then(response => {
        if (response.status === 200) {
            console.log("Everything went well");

            // Display a success toast, with a title
            toastr.success("Message sent");

            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("phone").value = "";
            document.getElementById("message").value = "";

        } else {
            
            console.log("Error sending the contact message", response.status);
        }
    });
}

document.getElementById("contact-button").addEventListener("click", sendContactMessage);