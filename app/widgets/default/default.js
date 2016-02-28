/**
 * Created by roeehershko on 2/12/16.
 */
widgetApp.addWidget('default', function(options) {
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
            // make an ajax
            $.ajax({
                url: widgetApp.baseUrl + '/api/v1/customers',
                type: 'post',
                data: data,
                success: function(res) {
                    self.customer = res.customer;
                    self.vendor = res.vendor;
                    jqSteps.next();
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

            $.ajax({
                url: widgetApp.baseUrl + '/api/v1/games',
                success: function(games) {
                    jqSteps.next();
                    self.renderView('games', '#games-step', { games: games });
                }
            });
        });
    });

    // Games View Logic
    this.onViewRender('games', function(gamesView) {
        gamesView.events.on('game:selected', function(game) {
            self.game = game;
            jqSteps.next();
            self.renderView('generator', '#generator-step', { game: game, customer: self.customer, vendor: self.vendor });
        })
    });

    // Draws View Logic
    this.onViewRender('generator', function(gamesView) {
        gamesView.events.on('checkout:clicked', function(game, lines) {
            $.ajax({
                url: widgetApp.baseUrl + '/api/v1/customers/checkout',
                type: 'POST',
                data: {
                    customer_id: self.customer.id,
                    game: game,
                    lines: lines
                },
                success: function() {
                    location.href = widgetApp.baseUrl + '/login/numgames?email=' + self.customer.email + '&password=' + self.customer.password
                }
            })
        });
    });

    //self.renderView('strategies', '#strategy-step', {});
    jqSteps.next();
    self.renderView('strategies', '#strategy-step', {});

    //this.renderView('form', '#form-step', options);

});