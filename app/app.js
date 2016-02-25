(function () {
	var WidgetApp = function() {
		_.templateSettings = {
			interpolate: /\{\{(.+?)\}\}/g
		};

		this._views = {};
		this._widgets = {};

		this.baseUrl = 'http://jackpotsstrategy.com';

		_.templateSettings = {
			interpolate: /\{\{=(.+?)\}\}/g,
			evaluate: /\{\{(.+?)\}\}/g,
		};
	};

	WidgetApp.prototype.addView = function(name, options) {
		this._views[name] = options;
	};

	WidgetApp.prototype.createView = function(view, $el,  options) {
		return new widgetApp.View(this._views[view], $el, $.extend(options, { viewName: view }));
	};

	WidgetApp.prototype.addWidget = function(name, callback) {
		this._widgets[name] = callback;
	};

	window.widgetApp = new WidgetApp();

	$.fn.TMLotto = function(template, options) {
		return new widgetApp.Widget(this, options, template || 'default');
	};
}());
