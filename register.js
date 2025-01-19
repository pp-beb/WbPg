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
            console.log(name);
            console.log(number);
            console.log(email);
            console.log(username);
            console.log(password);

            form.submit(); 
            alert(`Hi ${name}, your form has been submitted. I will get back to you in some time.`)
        } else {
            alert('Please fill out all fields.');
        }
    });
});

let original="";


function eye() {
    const passwordField = document.getElementById('password');
    let password = passwordField.value; 
    original = password;
    let hidden = ""; 

    for (let i = 0; i < password.length; i++) {
        hidden += "."; 
    }
    document.getElementById('password').value=hidden;
}

function eye2() {

    const passwordField = document.getElementById('password');
    document.getElementById('password').value=original;
}