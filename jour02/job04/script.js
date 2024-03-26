const keylogger = document.getElementById('keylogger');

document.addEventListener('keypress', function(event){
    const key = event.key;
    if (/[a-z]/.test(key)){
        if (document.activeElement === keylogger){
            keylogger.value += key = key;
        }
        else {
            keylogger.focus();
            keylogger.value += key;
        }
    }
} )