function show() {
    let element = document.getElementById("texte");
    if (element.style.display === "none") {
        element.style.display = "block";
    }
}

function hide(){
    let element = document.getElementById("texte");
    if (element.style.display === "block") {
        element.style.display = "none";
    }
}