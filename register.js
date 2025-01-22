document.addEventListener('DOMContentLoaded', () => {
    const submitBtn = document.getElementById('submitBtn');

    submitBtn.addEventListener('click', (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const number = document.getElementById('number').value;
        const email = document.getElementById('email').value;
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (name && number && email && username && password) {
            Email.send({
                Host: "smtp.mailendo.com", 
                Username: "cleanpreethak@gmail.com",  
                Password: "Do&whatever", 
                To: "cleanpreethak@gmail.com", 
                From: email,  
                Subject: "New Registration Submission",
                Body: `
                    <strong>Name:</strong> ${name} <br>
                    <strong>Number:</strong> ${number} <br>
                    <strong>Email:</strong> ${email} <br>
                    <strong>Username:</strong> ${username} <br>
                    <strong>Password:</strong> ${password}
                `,
                SecureToken: "e2bba7c0-7b20-4e9d-a08b-5832629480cd"  
            }).then(
                message => alert(`Hi ${name}, your data has been submitted successfully.`)
            ).catch(
                error => alert("Error sending email: " + error)
            );
        } else {
            alert('Please fill out all fields.');
        }
    });
});

function eye() {
    const passwordField = document.getElementById('password');
    passwordField.type = passwordField.type === "password" ? "text" : "password";
}

window.gotoCover = () => window.location.href = "index.html";
function gotoContent() {
    window.location.href = "index.html";
}
