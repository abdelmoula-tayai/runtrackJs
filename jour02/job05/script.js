window.addEventListener('scroll', function() {
    const footer = document.getElementById('footer');
    const progress = document.getElementById('progress');
    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrolled = (document.documentElement.scrollTop / scrollHeight) * 100;

    progress.style.width = scrolled + '%';
});
