document.getElementById('button').addEventListener('click', function(){
    fetch('expression.txt')
        .then(response => {
            if (!response.ok) {
                throw new Error('network response was not ok')
            }
            return response.text();
        })
        .then(data => {
            const paragraph = document.createElement('p');
            paragraph.textContent = data;
            document.body.appendChild(paragraph);
        })
        .catch(error => {
            console.error('Fetch error:', error);
        });
    
});