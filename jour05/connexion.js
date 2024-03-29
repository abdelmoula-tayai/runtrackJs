const form = document.getElementById('form');
const inputs = {
    email: document.getElementById('email'),
    password: document.getElementById('password')
};

form.addEventListener('submit', e => {
    e.preventDefault();
    validateInputs();
});

for (const input of Object.values(inputs)) {
    input.addEventListener('input', () => {
        validateInput(input);
    });
}

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success');
};

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const validateEmail = emailValue => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/;
    return re.test(emailValue);
};

const validatePassword = passwordValue => {
    // La logique de validation du mot de passe
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;
    return re.test(passwordValue);
};

const validateInput = input => {
    const value = input.value.trim();
    const id = input.id;

    if (value === '') {
        setError(input, `${id.charAt(0).toUpperCase() + id.slice(1)} requis`);
    } else {
        switch (id) {
            case 'email':
                if (!validateEmail(value)) {
                    setError(input, `Fournir une adresse email valide`);
                } else {
                    setSuccess(input);
                }
                break;
            case 'password':
                if (!validatePassword(value)) {
                    setError(input, `Le mot de passe doit comporter au moins 8 caractères, une majuscule, une minuscule, un caractère spécial et un chiffre`);
                } else {
                    setSuccess(input);
                }
                break;
            default:
                break;
        }
    }
};

const validateInputs = () => {
    for (const input of Object.values(inputs)) {
        validateInput(input);
    }
};
