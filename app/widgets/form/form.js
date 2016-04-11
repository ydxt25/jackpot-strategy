/**
 * Created by roeehershko on 2/12/16.
 */
widgetApp.addWidget('form', function(options) {
    var self = this;

    var jqSteps = this.$el.find('#jqs-example').jQSteps({
        maxWidth: '100%'
    });

    /**
     * Form View Logic
     */
    this.onViewRender('form', function(formView) {
        formView.$el.find('.step-header').hide();

        formView.events.on('form:submit', function(data) {

            data.campaign_id = options.campaignId;
            data.tracking = options.tracking || {};

            // make an ajax
            $.ajax({
                url: widgetApp.baseUrl + '/api/v1/customers',
                type: 'post',
                data: data,
                success: function(res) {
                    self.customer = res.customer;
                    self.vendor = res.vendor;
                    jqSteps.next();
                    self.renderView('redirect', '#redirect-step', options);
                },
                error: function(res) {
                    formView.triggerMethod('showError', res.responseJSON.error);
                }
            });
        });

    });

    // Draws View Logic
    this.onViewRender('redirect', function() {
        setTimeout(function() {
            top.location.href = widgetApp.baseUrl + '/login/' + self.vendor.platform.systemName + '?email=' + self.customer.email + '&password=' + self.customer.password
        }, 2000);
    });

    //self.renderView('strategies', '#strategy-step', {});
    this.renderView('form', '#form-step', options);

});