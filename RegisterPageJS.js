const form = document.querySelector('form');
const usernameInput = document.querySelector('input[type="email"]:nth-of-type(1)');
const emailInput = document.querySelector('input[type="email"]:nth-of-type(2)');
const passwordInput = document.querySelector('input[type="password"]');
const ageInput = document.querySelector('input[type="number"]');
const dobInput = document.querySelector('input[type="date"]');
const contactInput = document.querySelector('input[type="tel"]');
form.addEventListener('submit', (event) => {
        event.preventDefault();
        if (validateForm()) {
                console.log('Username: ', usernameInput.value);
                console.log('Email: ', emailInput.value);
                console.log('Password: ', passwordInput.value);
                console.log('Age: ', ageInput.value);
                console.log('Date of Birth: ', dobInput.value);
                console.log('Contact Number: ', contactInput.value);
                form.reset();
        }
});
function validateForm() {
        let isValid = true;
        if (usernameInput.value === '') {
                usernameInput.nextElementSibling.innerHTML = 'Username is required';
                isValid = false;    
    } else {
                usernameInput.nextElementSibling.innerHTML = '';    
    }
    if (emailInput.value === '') {
            emailInput.nextElementSibling.innerHTML = 'Email is required';
            isValid = false;
    } else if (!isValidEmail(emailInput.value)) {
            emailInput.nextElementSibling.innerHTML = 'Email is invalid';
            isValid = false;
    } else {
            emailInput.nextElementSibling.innerHTML = '';
    }
    if (passwordInput.value === '') {
            passwordInput.nextElementSibling.innerHTML = 'Password is required';
            isValid = false;
    } else {
            passwordInput.nextElementSibling.innerHTML = '';
    }
    if (ageInput.value === '') {
            ageInput.nextElementSibling.innerHTML = 'Age is required';
            isValid = false;
    } else if (ageInput.value < 1 || ageInput.value > 120) {
            ageInput.nextElementSibling.innerHTML = 'Age should be between 1 and 120';
            isValid = false;
    } else {
            ageInput.nextElementSibling.innerHTML = '';
    }
    if (dobInput.value === '') {
            dobInput.nextElementSibling.innerHTML = 'DOB is required';
            isValid = false;
    } else {
            dobInput.nextElementSibling.innerHTML = '';
    }
    if (contactInput.value === '') {
            contactInput.nextElementSibling.innerHTML = 'Contact Number is required';
            isValid = false;
    } else {
            contactInput.nextElementSibling.innerHTML = '';
    }
    return isValid;}
function isValidEmail(email) {
        const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return emailRegex.test(email);}