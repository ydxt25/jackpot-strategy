/**
 * Created by roee on 1/28/2016.
 */
(function() {
    window.Generators = {
        addGame: function(game, options) {
            window.Generators.games = window.Generators.games || {};
            window.Generators.games[game] = options;
        },
        getGames: function() {
            return window.Generators.games;
        },
        getGame: function(game) {
            return window.Generators.games[game];
        }
    };

    var GeneratorView = function(type, options, $el) {
        this.options = options;
        this.generator = new Generators[type](options.game, options);
        this.gameOptions = window.Generators.games[options.game];
        this.$el = $el;
    };

    GeneratorView.prototype.showDraws = function() {
        this.$el.html('');

        this.$el.append(
            $('<div></div>', { 'class': 'draw-lines owl-carousel owl-theme' })
        );

        var $drawLines = this.$el.find('.draw-lines');

        for(var d = 1; d <= this.options.draws; d++) {
            $drawLine = this.createDrawLine();
            $drawLines.append($drawLine);
        }

        $drawLines.owlCarousel({
            navigation : true,
            margin: 15,
            responsive:{
                0:{
                    items:1
                },
                500:{
                    items:3
                },
                750:{
                    items:4
                },
                1000:{
                    items:5
                }
            }
        });
    };

    GeneratorView.prototype.clear = function() {
        var $drawLines = this.$el.find('.draw-line');

        for(var d = 0; d < this.options.draws; d++) {
            $drawLine = $drawLines.eq(d);
            $drawLine.find('.draw-pick').removeClass('picked');
        }
    };

    GeneratorView.prototype.pick = function(addCLass) {
        var $drawLines = this.$el.find('.draw-line');
        var _this = this,
            currentPicks = [];

        for(var d = 0; d < this.options.draws; d++) {
            $drawLine = $drawLines.eq(d);

            $drawLine.find('.draw-pick').removeClass('picked');

            var picks = _this.generator.pick();
            for(var pKey in picks)
            {
                var pick = picks[pKey];
                $drawLine.find('.draw-pick[data-pick=' + pick + ']').not('.special-pick').addClass('picked' + (addCLass ? (' ' + addCLass) : ''));
            }

            var specialPicks = _this.generator.pickSpecial();
            for(var pKey in specialPicks)
            {
                var pick = specialPicks[pKey];
                $drawLine.find('.draw-pick.special-pick[data-pick=' + pick + ']').addClass('picked' + (addCLass ? (' ' + addCLass) : ''));
            }

            currentPicks.push({
                commons: picks,
                specials: specialPicks
            });
            $drawLines.append($drawLine);
        }

        this._lastPicks =  currentPicks;
    };

    GeneratorView.prototype.getLastPick = function() {
        return this._lastPicks;
    };

    GeneratorView.prototype._addUtil = function($drawLine) {
        var _this = this;
        $drawLine.on('click', '.draw-pick.normal-pick', function() {
            var totalDraws = $drawLine.find('.draw-pick.normal-pick.picked').length;
            if ( ! $(this).hasClass('picked') && totalDraws < _this.gameOptions.balls) {
                $(this).addClass('picked');
            }
            else if ($(this).hasClass('picked')) {
                $(this).removeClass('picked')
            }
        })

        $drawLine.on('click', '.draw-pick.special-pick', function() {
            var totalDraws = $drawLine.find('.draw-pick.special-pick.picked').length;
            if ( ! $(this).hasClass('picked') && totalDraws < _this.gameOptions.specialBalls) {
                $(this).addClass('picked');
            }
            else if ($(this).hasClass('picked')) {
                $(this).removeClass('picked')
            }
        })
    };

    GeneratorView.prototype.createDrawLine = function() {
        $drawLine = $('<div></div>', { 'class': 'draw-line' });

        for(var i = this.gameOptions.ballRange[0]; i <= this.gameOptions.ballRange[1]; i++) {
            $drawLine.append(
                $('<div></div>', { 'class': 'draw-pick normal-pick', 'data-pick': i }).text(i)
            )
        }

        if (this.gameOptions.specialBallRange[1] != 0) {
            for(var i = this.gameOptions.specialBallRange[0]; i <= this.gameOptions.specialBallRange[1]; i++) {
                $drawLine.append(
                    $('<div></div>', { 'class': 'draw-pick special-pick', 'data-pick': i }).text(i)
                )
            }
        }

        // Add events
        this._addUtil($drawLine);

        return $drawLine;
    };

    GeneratorView.prototype.setOptions = function(options) {
        this.options = options;
    };

    GeneratorView.prototype.setOption = function(k, v) {
        this.options[k] = v;
    };

    $.fn.draw = function(type, options) {
        return new GeneratorView(type, options, this);
    }
}());