const form = document.getElementById('form');
const inputs = {
    email: document.getElementById('email'),
    password: document.getElementById('password'),
    confirmPassword: document.getElementById('confirm-password')
};

form.addEventListener('submit', e => {
    e.preventDefault();
    if (validateInputs()) {
        let formData = new FormData(form);
        let data = Object.fromEntries(formData);
        let jsonData = JSON.stringify(data);

        // Envoi des données JSON à un serveur
        fetch('http://localhost:5500/submit-form', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: jsonData
        })
        .then(response => {
            if (response.ok) {
                console.log('Données envoyées avec succès');
                // Redirect to the connection page
                window.location.href = "connection.html";
            } else {
                console.error('Échec de l\'envoi des données');
            }
        })
        .catch(error => {
            console.error('Erreur lors de l\'envoi des données', error);
        });
    }
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

const validateEmail = email => {
    const laplateformeRe = /@laplateforme\.io$/;
    return laplateformeRe.test(email.trim());
};

const validatePassword = passwordValue => {
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;
    return re.test(passwordValue);
};

const validateInput = input => {
    const value = input.value.trim();
    const id = input.id;

    if (value === '') {
        setError(input, `Champ obligatoire`);
    } else {
        switch (id) {
            case 'email':
                if (!validateEmail(value)) {
                    setError(input, `Fournir une adresse @laplateforme valide`);
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
            case 'confirm-password':
                if (value !== inputs.password.value.trim()) {
                    setError(input, `Les mots de passe ne correspondent pas`);
                } else {
                    setSuccess(input);
                }
                break;
            default:
                break;
        }
    }
};

function validateInputs() {
    let isValid = true;

    for (const input of Object.values(inputs)) {
        validateInput(input);
        if (input.classList.contains('error')) {
            isValid = false;
        }
    }

    return isValid;
}
