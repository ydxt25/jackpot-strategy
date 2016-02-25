/**
 * Created by roee on 1/28/2016.
 */
(function() {
    var DefaultStrategy = window.Generators.Default = function(game, options) {
        this.gameOptions = window.Generators.games[game];
        this.options = options;
    };

    DefaultStrategy.prototype.pick = function() {
        var num = this.gameOptions.balls;
        return this._shuffle(num, this.gameOptions.ballRange[0], this.gameOptions.ballRange[1]);
    };

    DefaultStrategy.prototype.pickSpecial = function() {
        var num = this.gameOptions.specialBalls;
        var special = this._shuffle(num, this.gameOptions.specialBallRange[0], this.gameOptions.specialBallRange[1]);

        return special;
    };


    DefaultStrategy.prototype._shuffle = function(num, min, max) {
        var picks = [],
            chancePick;

        for(var i = 1; i <= num; i++) {
            chancePick = null;

            while ( ! chancePick || picks.indexOf(chancePick) != -1) {
                chancePick = chance.integer({ min: min, max: max });
            }

            picks.push(chancePick);
        }

        return picks.slice(0, num);
    };
}());