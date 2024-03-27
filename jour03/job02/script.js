$(document).ready(function(){
    const $rainbow = $("#rainbow");
    const $shuffleButton = $("#shuffleButton");
    const $resultMessage = $("#resultMessage");

    function shuffleRainbow(){
        $.each($rainbow.children(), function(i, img){
            $rainbow.append($rainbow.children().eq(Math.floor(Math.random() * i)));
            checkRainbow();
        });
    }

    function checkRainbow() {
        let sorted = true;
        $rainbow.children().each(function(i) {
            if ($(this).attr('alt') !== 'arc' + (i+1)) {
                sorted = false;
                return false; 
            }
        });
        if (sorted) {
            $resultMessage.text('Vous avez gagné').css('color', 'green');
        } else {
            $resultMessage.text('Vous avez perdu').css('color', 'red');
        }
    }

    $shuffleButton.on("click", shuffleRainbow)
});