<script>
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const rememberMeCheckbox = document.getElementById('rememberMe');
    const loginButton = document.getElementById('loginButton');
    
    loginButton.addEventListener('click', () => {
        console.log(`Email: ${emailInput.value}, Password: ${passwordInput.value}, Remember Me: ${rememberMeCheckbox.checked}`);
    });
</script>