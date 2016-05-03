/**
 * Created by roee on 2/11/2016.
 */
widgetApp.addView('form', {
	onShow: function() {
		var self = this;
		widgetApp.validator.validateRule('registration', this.options.language || 'en', this.$el.find('form'));

		var $phone = this.$el.find('input[name=phone]').eq(0);
		$phone.intlTelInput({
			allowDropdown: false
		});

		var countryData = $.fn.intlTelInput.getCountryData();
		$country = this.$el.find('select[name=country]');

		$.each(countryData, function(idx, country){
			$country.append(
				$('<option></option>', { value: country.iso2.toUpperCase() }).text(country.name)
			);
		});

		$.get(widgetApp.baseUrl + '/api/v1/geo-ip', function(res) {
			$phone.intlTelInput('setCountry', res.iso);
			$country.val(res.iso);
		});

		$.each((this.options.values || {}), function (field, value) {
			var $field = self.$el.find('input[name=' + field + ']');
			$field.val(value);

			if((self.options.cplOptimization || self.options.generatePass) && self.options.generatePass !== false) {
				$field.addClass('hidden');
			}
		});

		if((this.options.cplOptimization || this.options.generatePass) && this.options.generatePass !== false) {
			this.$el.find('.input-password').addClass('hidden');
			this.$el.find('.phone-notes').removeClass('hidden');
		}
	},
	onRender: function() {

	},
	onDestroy: function() {

	},
	events: {
		"submit .widget-form": 'formSubmit',
		"change select[name=country]": 'countrySelectChanged',
		"click .show-login": "showLogin"
	},
	showLogin: function(e) {
		e.preventDefault();
		this.events.trigger('show:login')
	},
	countrySelectChanged: function(e) {
		var iso = $(e.currentTarget).val();
		var $phone = this.$el.find('input[name=phone]').eq(0);

		$phone.intlTelInput('setCountry', iso);
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

			if(this.options.cplOptimization || this.options.generatePass) {
				formObject.password = formObject.first_name + ((new Date()).getTime() + '').substr(-3);
			}

			this.events.trigger('form:submit', formObject);
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
			.text('Email already exists, please change your email and try again');
	}
});