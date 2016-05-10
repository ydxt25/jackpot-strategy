/**
 * Created by roeehershko on 2/12/16.
 */
widgetApp.addWidget('game', function(options) {
    var self = this;

    var jqSteps = this.$el.find('#jqs-example').jQSteps({
        maxWidth: '100%'
    });

    /**
     * Form View Logic
     */
    this.onViewRender('form', function(formView) {
        formView.events.on('form:submit', function(data) {

            data.campaign_id = options.campaignId;
            data.tracking = options.tracking || {};

            // make an ajax
            $.ajax({
                url: widgetApp.baseUrl + '/api/v1/customers',
                type: 'post',
                data: data,
                success: function(res) {
                    jqSteps.next();
                    self.customer = res.customer;
                    self.vendor = res.vendor;
                    self.renderView('strategies', '#strategy-step', {});
                },
                error: function(res) {
                    formView.triggerMethod('showError', res.responseJSON.error);
                }
            });
        });

    });

    // Strategy View Logic
    this.onViewRender('strategies', function(strategiesView) {
        strategiesView.events.on('strategy:select:clicked', function(strategy) {
            jqSteps.next();
            self.renderView('generator', '#generator-step', { game: options.game });
        })
    });

    // Draws View Logic
    this.onViewRender('generator', function(gamesView) {
        gamesView.events.on('checkout:start', function(game, lines) {
            $.ajax({
                url: widgetApp.baseUrl + '/api/v1/customers/checkout',
                type: 'POST',
                data: {
                    customer_id: self.customer.id,
                    game: game,
                    lines: lines
                },
                success: function() {
                    top.location.href = widgetApp.baseUrl + '/login/' + self.vendor.platform.system_name + '?email=' + self.customer.email + '&password=' + self.customer.password
                }
            })
        });
    });

    this.renderView('form', '#form-step', options);

});