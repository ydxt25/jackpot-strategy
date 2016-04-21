/**
 * Created by roee on 2/11/2016.
 */
widgetApp.addView('login', {
	onShow: function() {
		widgetApp.validator.validateRule('login', this.options.language || 'en', this.$el.find('form'));
	},
	onRender: function() {

	},
	onDestroy: function() {

	},
	events: {
		"submit .widget-form": 'formSubmit',
		"click .show-form" : "showForm"
	},
	showForm: function(e) {
		e.preventDefault();

		this.events.trigger('show:form');
	},
	formSubmit: function(e) {
		e.preventDefault();

		var $form = $(e.currentTarget);

		if ($form.valid()) {
			this.$el.find('.form-loading')
				.removeClass('hidden')
				.end()
				.find('.form-buttons')
				.addClass('hidden');

			var formArray = $form.serializeArray();
			var formObject = {};

			$.map(formArray, function(n, i){
				formObject[n['name']] = n['value'];
			});

			this.events.trigger('login:form:submit', formObject);
		}
	},
	clearLoading: function() {
		this.$el.find('.form-loading')
			.addClass('hidden')
			.end()
			.find('.form-buttons')
			.removeClass('hidden');
	},
	showError: function(error) {
		this.triggerMethod('clearLoading');

		this.$el.find('.form-error')
			.removeClass('hidden')
			.text('Invalid email or password given');
	}
});