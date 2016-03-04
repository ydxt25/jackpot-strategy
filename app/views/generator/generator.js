/**
 * Created by roee on 2/11/2016.
 */
widgetApp.addView('generator', {
    onShow: function(options) {
        var self = this;
        this.options = options;
        var generator = this.$el.find('#draws').draw('Dates', {
            dates: [ '2016-15-04', '1993-11-07' ],
            game: options.game,
            draws: 5
        });

        generator.showDraws();
        generator.clear();
        for (var i = 0; i <= 6; i++)
        {
            (function () {
                var localI = i;
                setTimeout(function() {
                    if (localI == 6) {
                        generator.pick('sealed');
                        $('#numbers-ready').removeClass('hidden');

                        self.$el.find('.generating').addClass('hidden');

                        self.$el
                            .find('.checkout-loading')
                            .removeClass('hidden');

                        setTimeout(function() {
                            self.events.trigger('checkout:start', self.options.game, generator.getLastPick());
                        }, 2000)
                    }
                    else {
                        generator.pick();
                    };

                }, i * 700);

            }());
        }

        this.generator = generator;
    },
    onRender: function() {

    },
    onDestroy: function() {

    }
});