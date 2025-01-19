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
        } else {
            alert('Please fill out all fields.');
        }
    });
});
