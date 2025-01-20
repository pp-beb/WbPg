document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('InputForm');
    const submitBtn = document.getElementById('submitBtn');

    submitBtn.addEventListener('click', (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const number = document.getElementById('number').value;
        const email = document.getElementById('email').value;
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (name && number && email && username && password) {
            fetch('http://localhost:3000/addUser', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: name,
                    number: number,
                    email: email,
                    username: username,
                    password: password
                }),
            })
                .then((response) => response.text())
                .then((data) => {
                    alert(`Hi ${name}, your data has been submitted. ${data}`);
                })
                .catch((error) => {
                    console.error('Error:', error);
                    alert('There was an error submitting your form. Please try again.');
                });
        } else {
            alert('Please fill out all fields.');
        }
    });
});

let original = "";

function eye() {
    const passwordField = document.getElementById('password');
    let password = passwordField.value;
    original = password;
    let hidden = "";

    for (let i = 0; i < password.length; i++) {
        hidden += ".";
    }
    document.getElementById('password').value = hidden;
}

function eye2() {
    const passwordField = document.getElementById('password');
    document.getElementById('password').value = original;
}

window.gotoCover = () => window.location.href = "index.html";
function gotoContent(){
    window.location.href = "index.html";
}