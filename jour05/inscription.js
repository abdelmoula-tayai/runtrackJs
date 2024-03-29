const form = document.getElementById('form');
const inputs = {
    username: document.getElementById('username'),
    firstname: document.getElementById('firstname'),
    email: document.getElementById('email'),
    password: document.getElementById('password'),
    address: document.getElementById('address'),
    zipcode: document.getElementById('zipcode')
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

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@([a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/;
    const validExtensions = ['.com', '.net', '.org', '.edu', '.gov', '.io', '.fr', '.co', '.uk', '.de']; // Extensions couramment utilisées

    if (!re.test(String(email).toLowerCase())) {
        return false;
    }

    const emailParts = email.split('@');
    if (emailParts.length !== 2) {
        return false;
    }

    const domain = emailParts[1];
    const domainParts = domain.split('.');
    if (domainParts.length !== 2) {
        return false;
    }

    const extension = domainParts[1];
    if (!validExtensions.includes('.' + extension)) {
        return false;
    }

    return true;
};


const isValidPassword = password => {
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{9,}$/;
    return re.test(password);
};

const validateInput = input => {
    const value = input.value.trim();
    const id = input.id;

    const lettersOnlyRegex = /^[A-Za-z]+$/;

    if (value === '') {
        setError(input, `${id.charAt(0).toUpperCase() + id.slice(1)} requis`);
    } else {
        switch (id) {
            case 'username':
            case 'firstname':
                if (!lettersOnlyRegex.test(value)) {
                    setError(input, `Le ${id} ne doit contenir que des lettres`);
                } else if (value.length < 3) {
                    setError(input, `Le ${id} doit contenir au moins 3 lettres`);
                } else {
                    setSuccess(input);
                }
                break;
            case 'email':
                if (!isValidEmail(value)) {
                    setError(input, `Fournir une adresse email valide`);
                } else {
                    setSuccess(input);
                }
                break;
            case 'password':
                if (!isValidPassword(value)) {
                    setError(input, `Le mot de passe doit comporter au moins 8 caractères, une majuscule, une minuscule, un caractère spécial et un chiffre`);
                } else {
                    setSuccess(input);
                }
                break;
            case 'address':
                const addressRegex = /^(\d+)\s+(.+)/;
                const match = value.match(addressRegex);
                if (match) {
                    setSuccess(input);
                } else {
                    setError(input, 'Adresse invalide. Veuillez inclure le numéro de rue et le nom de la rue.');
                }
                break;
            case 'zipcode':
                if (!/^\d{5}$/.test(value)) {
                    setError(input, `Le code postal doit contenir exactement 5 chiffres`);
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
