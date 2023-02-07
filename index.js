function emailValidation() {
    const email = document.querySelector('#email')
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    email.addEventListener('input', () => {
        if (email.value.match(emailRegex)) {
            email.setCustomValidity('')
        } else {
            email.setCustomValidity('Please enter a valid email address.')
        }
    })
}

function countryValidation() {
    const country = document.querySelector('#country')
    const countryRegex = /[a-zA-Z]{3}/;

    country.addEventListener('input', () => {
        if (country.value.match(countryRegex)) {
            country.setCustomValidity('')
        } else {
            country.setCustomValidity('Please enter a 3 character country code. "USA"')
        }
    })
}

function zipCodeValidation() {
    const zipCode = document.querySelector('#zipCode')
    const zipCodeRegex = /[0-9]{5}/

    zipCode.addEventListener('input', () => {
        if (zipCode.value.match(zipCodeRegex)) {
            zipCode.setCustomValidity('')
        } else {
            zipCode.setCustomValidity('Please enter a 5 digit zip code.')
        }
    })
}

function passwordValidation() {
    const password = document.querySelector('#password')
    const passwordRegex = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]{8,30}/

    password.addEventListener('input', () => {
        if (password.value.match(passwordRegex)) {
            password.setCustomValidity('')
        } else {
            password.setCustomValidity('Please enter a password between 8 and 20 characters.')
        }
    } )
    return password.value;
}

function passwordConfirm() {
    const confirmPassword = document.querySelector('#confirmPassword')

    confirmPassword.addEventListener('input', () => {
        if (passwordValidation() == confirmPassword.value) {
            confirmPassword.setCustomValidity('')
        } else {
            confirmPassword.setCustomValidity('Password does not match.')
        }
    })
}

function validationHandler() {
    emailValidation();
    countryValidation();
    zipCodeValidation();
    passwordValidation();
    passwordConfirm();
}


validationHandler();