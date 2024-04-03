document.addEventListener("DOMContentLoaded", () => {
    const btnCommanderPapillon = document.querySelector('#btnCommanderPapillon');
    btnCommanderPapillon.addEventListener('click', () => $('#modalCommanderPapillon').modal('show'));

    const closeBtn = document.querySelector('.close');
    closeBtn.addEventListener('click', () => $('#modalCommanderPapillon').modal('hide'));
});

document.getElementById('rebootBtn').addEventListener('click', () => {
    document.getElementById('spinner').classList.remove('d-none');
    const citations = [
        "T'endors pas, c'est l'heure de mourir.",
        "Ce sont des moments qui meurent dans le temps comme des larmes dans la pluie.",
        "J'ai vu des choses que vous autres humains ne pourriez pas croire.",
        "Étrange sensation que de vivre dans la peur… voila ce que c’est d’être un esclave."
    ];
    const citationAleatoire = citations[Math.floor(Math.random() * citations.length)];
    document.querySelector('.jumbotron p:last-of-type').textContent = citationAleatoire;
});

const contentArray = [
    "Je crois que le contenu pour la page 1 est le meilleur.",
    "je crois que je préfère le contenu pour la page 2.",
    "j'aurais aimé être la page 1 malheureusement je suis la page 3."
];

const changeContent = (pageNumber) => {
    let contentIndex = pageNumber - 1;
    document.querySelector('.jumbotron p:nth-of-type(2)').textContent = contentArray[contentIndex];
}

const listItems = document.querySelectorAll('#myList .list-group-item');
listItems.forEach(item => {
    item.addEventListener('click', () => {
        listItems.forEach(item => {
            item.classList.remove('active');
        });
        item.classList.add('active');
    });
});


document.addEventListener("DOMContentLoaded", () => {
    const progressBar = document.querySelector(".progress-bar");
    const leftButton = document.querySelector(".bi-arrow-bar-left");
    const rightButton = document.querySelector(".bi-arrow-bar-right");

    const progressForward = () => {
        let currentValue = parseFloat(progressBar.style.width);
        if (currentValue < 100) {
            progressBar.style.width = `${currentValue + 5}%`;
            progressBar.setAttribute("aria-valuenow", currentValue + 5);
        }
    }

    const progressBackward = () => {
        let currentValue = parseFloat(progressBar.style.width);
        if (currentValue > 0) {
            progressBar.style.width = `${currentValue - 5}%`;
            progressBar.setAttribute("aria-valuenow", currentValue - 5);
        }
    }

    leftButton.addEventListener("click", progressBackward);
    rightButton.addEventListener("click", progressForward);
});



const closeButton = document.getElementsByClassName('close')[0];
closeButton.onclick = () => {
    const modal = document.getElementById('myModal');
    modal.style.display = 'none';
}

window.onclick = (event) => {
    const modal = document.getElementById('myModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

let keySequence = [];
const secretCode = ['d', 'g', 'c'];

document.addEventListener('keydown', (event) => {
    keySequence.push(event.key.toLowerCase());
    keySequence.splice(-secretCode.length - 1, keySequence.length - secretCode.length);

    if (keySequence.join('') === secretCode.join('')) {
        const modal = document.getElementById('myModal');
        const formFields = document.querySelectorAll('form input, form select, form textarea');
        let modalContent = '';

        formFields.forEach(field => {
            modalContent += `<p>${field.name}: ${field.value}</p>`;
        });

        document.querySelector('#myModal .modal-body').innerHTML = modalContent;
        modal.style.display = 'block';
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault();

            const email = document.querySelector('input[type="email"]').value;
            const password = document.querySelector('input[type="password"]').value;

            if (email && password) {
                const spinner = document.querySelector('#spinner');
                const colors = ['red', 'blue', 'green', 'yellow', 'purple', 'pink'];
                const randomColor = colors[Math.floor(Math.random() * colors.length)];
                spinner.style.color = randomColor;
            }
        });
    }
});

