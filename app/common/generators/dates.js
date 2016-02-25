/**
 * Created by roee on 1/28/2016.
 */
(function() {
    var DatesStrategy = window.Generators.Dates = function(game, options) {
        this.gameOptions = window.Generators.games[game];
        this.options = options;
    };

    DatesStrategy.prototype.pick = function() {
        var num = this.gameOptions.balls;
        return this._shuffle(num, this.gameOptions.ballRange[0], this.gameOptions.ballRange[1]);
    };

    DatesStrategy.prototype.pickSpecial = function() {
        var num = this.gameOptions.specialBalls;
        var special = this._shuffle(num, this.gameOptions.specialBallRange[0], this.gameOptions.specialBallRange[1]);

        return special;
    };


    DatesStrategy.prototype._shuffle = function(num, min, max) {
        var picks = [],
            chancePick;

        for(var i = 1; i <= num; i++) {
            chancePick = null;

            while ( ! chancePick || picks.indexOf(chancePick) != -1) {
                chancePick = chance.integer({ min: min, max: max });
            }

            picks.push(chancePick);
        }

        var datesPicks = [];

        for(var dKey in this.options.dates){
            datesPicks = datesPicks.concat(this.options.dates[dKey].split('-'));
        }

        for (var pKey in datesPicks) {
            var pick = datesPicks[pKey];
            if (pick.length > 2) {
                pick = pick.substr(0, 2);
            }

            if (pick <= max) {
                pick = parseInt(pick);

                if (chance.bool({likelihood: 50}) && picks.indexOf(pick) == -1) {
                    picks[chance.integer({ min: 0, max: picks.length - 1 })] = pick;
                }
            }
        }

        return picks.slice(0, num);
    };
}());