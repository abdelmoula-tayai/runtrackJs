function showhide() {
    const article = document.getElementById('article');
    if (article.style.display === 'none') {
        article.style.display = 'block';
    }
    else {
        article.style.display = 'none';
    }
}