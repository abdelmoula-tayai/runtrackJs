window.addEventListener('scroll', function() {
    const footer = document.getElementById('footer');
    const progress = document.getElementById('progress');
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (document.documentElement.scrollTop / scrollHeight) * 100;

    progress.style.width = scrolled + '%';
});


const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
let konamiIndex = 0;

function konamiHandler(event) {
    if (event.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
            applyTheme();
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
}

function applyTheme() {
    document.body.classList.add('laPlateforme');
}

document.addEventListener('keydown', konamiHandler);

