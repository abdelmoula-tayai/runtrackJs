function citation() {
    let citation = document.getElementById('citation').textContent;
    console.log(citation);
}

document.getElementById('button').addEventListener('click', citation)