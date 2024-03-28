$(document).ready(function() {
    const images = ['logo1.png', 'logo2.png', 'logo3.png', 'logo4.png', 'logo5.png', 'logo6.png', 'logo7.png', 'logo8.png'];
    initializeGame(images);

    $('#restartButton').click(function() {
        $('#message').hide();
        $(this).hide();
        initializeGame(images);
    });
});

function initializeGame(images) {
    const gameBoard = $('#gameBoard');
    gameBoard.empty();
    let tiles = [];

    for (let i = 0; i < images.length; i++) {
        const tile = $('<div class="tile"></div>');
        const img = $('<img>').attr('src', 'assets/' + images[i]).attr('alt', 'Logo ' + (i + 1));
        tile.append(img);
        tiles.push(tile);
    }

    tiles.push($('<div class="tile empty"></div>'));
    tiles.sort(() => Math.random() - 0.5);

    tiles.forEach(tile => {
        gameBoard.append(tile);
    });

    $('.tile:not(.empty)').click(function() {
        moveTile(this);
    });
}

function moveTile(tile) {
    const emptyTile = $('.empty');
    const tileIndex = $(tile).index();
    const emptyIndex = $(emptyTile).index();
    const rowCount = 3;

    const isAdjacent = 
        (Math.abs(tileIndex - emptyIndex) === 1 && Math.floor(tileIndex / rowCount) === Math.floor(emptyIndex / rowCount)) ||
        (Math.abs(tileIndex - emptyIndex) === rowCount);

    if (isAdjacent) {
        const tileImg = $(tile).children('img').detach();
        $(emptyTile).append(tileImg);
        $(emptyTile).removeClass('empty');
        $(tile).addClass('empty');

        $('.tile').off('click').click(function() {
            moveTile(this);
        });

        checkVictory();
    }
}

function checkVictory() {
    const tilesOrder = $('#gameBoard .tile:not(.empty) img').toArray().map(img => $(img).attr('alt').match(/Logo (\d)$/)[1]);
    if (tilesOrder.join('') === '12345678') {
        $('#message').text('Vous avez gagné').show();
        $('#restartButton').show();
        $('.tile').off('click');
    }
}
