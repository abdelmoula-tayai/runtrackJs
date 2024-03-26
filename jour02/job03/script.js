function addOne (){
    let p = document.getElementById('compteur');
    p.textContent++;
}

document.getElementById('button').addEventListener('click', addOne)