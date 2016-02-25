/**
 * Created by roeehershko on 2/19/16.
 */
(function() {
    $.ajax({
        url: widgetApp.baseUrl + '/api/v1/games/lotteries',
        success: function(games) {
            $.each(games, function(idx, game) {
                Generators.addGame(game.systemName, {
                    displayName: game.title,
                    specialBallsName: game.extraNumbersTitle,
                    balls: game.numbers,
                    specialBalls: game.extraNumbers,
                    ballRange: [ game.numFrom, game.numTo ],
                    specialBallRange: [ game.extraNumbersFrom, game.extraNumbersTo ],
                    jackpot: game.jackpot.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,').replace('.00', ''),
                    systemName: game.systemName,
                    endDate: new Date(game.endDate.timestamp * 1000)
                });
            });
        }
    });
}());