/**
 * Created by roee on 2/11/2016.
 */
widgetApp.addView('strategies', {

    onShow: function() {
        this.$el.find('.strategy-box-container').owlCarousel({
            items: 1,
            autoPlay: 1,
            navigation : true
        });

        var owl = this.$el.find('.strategy-box-container').data('owl.carousel');
    },
    onRender: function() {

    },
    onDestroy: function() {

    },
    events: {
        "click .choose-strategy-btn": 'strategySelected'
    },
    strategySelected: function(e) {
        this.events.trigger('strategy:select:clicked', $(e.currentTarget).data('strategy'))
    }
});