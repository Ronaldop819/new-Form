function handleSingupFormSubmit (e) {
    // prevent default browser behaviour (evitar o comportamento padrão do navegador)
    e.preventDefault();

    const formDataEntries = new FormData(signupForm).entries();
    const {email, password} = Object.fromEntries(formaDataEntries);
}

function validaPassword (password, minlength) {
    if (!password) return 'Password is required';

    if (password.length < minlength) {
        return `Please enter a password that's at least ${minlength} characters long`;
    }

    const hasCapitalLetter = /[A-Z]/g;
    if (!hasCapitalLetter.test(password)) {
        return 'Please use at least one capital letter.';
    }

    const hasNumber = /\d/g;
    if (!hasNumber.test(password)) {
        return 'Please use at least one number.';
    }

    return '';
}

function validateEmail (email) {
    if (!email) return 'Email is required';

    const isValidEmail = /^\S+@\S+$/g;
    if (!isValidEmail.test(email)) {
        return 'Please enter a valid email';
    }

    return '';
} 

function handleSignupFormSubmit (e) {
    e.preventDefault();

    const formDataEntries = new FormData(signupForm).entries();
    const {email, password} = Object.fromEntries(formDataEntries);

    const emailErrorMessage = validateEmail(email);
    const passwordErrorMessage = validatePassword(password);

    if (!emailErrorMessage) {
        //select the email form field message element
        const emailErrorMessageElement = document.querySelector('.email . dkh-form-field__message');
        //show email error message to user
        emailErrorMessageElement.innerText = emailErrorMessageElement;
    }

    if (passwordErrorMessage) {
        //select the email form field message element
        const passwordErrorMessageElement = document.querySelector('.password .dkh-form-field__messages');
    }
}