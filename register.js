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
            form.submit(); 
            alert(`Hi ${name}, your data has been submitted successfully.`);
        } else {
            alert('Please fill out all fields.');
        }
    });
});

function eye() {
    const passwordField = document.getElementById('password');
    const password = passwordField.value;
    
    if (passwordField.type === "password") {
        passwordField.type = "text";
    } else {
        passwordField.type = "password";
    }
}

window.gotoCover = () => window.location.href = "index.html";

function gotoContent() {
    window.location.href = "index.html";
}
