/**
 * Created by roee on 2/11/2016.
 */
widgetApp.addView('games', {
    onShow: function() {
        this.$el.find('.games-box-container').owlCarousel({
            navigation : true,
            responsive:{
                0:{
                    items:1
                },
                400:{
                    items:2
                },
                600:{
                    items:3
                },
                1000:{
                    items:4
                }
            }
        });

        this.$el.find('.game-timer').each(function(idx, el) {
            $el = $(el);
            var date = new Date($el.data('time'));

            if ( ! $el.data('time')) {
                $el.html('Waiting for next draw');
                return;
            }

            $el.countdown(date, function(event) {
                if (event.strftime('%H:%M:%S') == '00:00:00') {
                    $(this).html('Waiting for next draw')
                }
                else if (event.strftime('%D') == '00') {
                    $(this).html(event.strftime('%H:%M:%S'));
                }
                else {
                    $(this).html(event.strftime('%D days %H:%M:%S'));

                }
            })
        })
    },
    templateHelpers: function() {
        return {
            games: Generators.getGames()
        }    
    },
    onRender: function() {

    },
    onDestroy: function() {

    },
    events: {
        "click .select-game-btn": 'gameSelected'
    },
    gameSelected: function(e) {
        this.events.trigger('game:selected', $(e.currentTarget).data('game'))
    }
});