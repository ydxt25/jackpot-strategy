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
                        self.$el.find('.generated')
                            .addClass('animated bounceIn')
                            .removeClass('hidden');

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

    },
    events: {
        'click .checkout-now': 'checkoutClicked'
    },
    checkoutClicked: function(e) {
        this.$el
            .find('.generated')
            .addClass('hidden')
            .end()
            .find('.checkout-loading')
            .removeClass('hidden');

        e.preventDefault();
        this.events.trigger('checkout:clicked', this.options.game, this.generator.getLastPick());
        console.log(this.generator.getLastPick());
    }
});