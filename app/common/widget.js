(function() {
	var Widget = widgetApp.Widget = function(el, options, widget) {
		this.$el = $(el);
		this.options = options;
		this._viewCallbacks = {};
		this.$el.addClass('widget-wrapper');

		var self = this;
		var tpl = _.template(JST['widgets/' + widget + '/' + widget + '.tpl.html']());
		options.trans = function(key) {
			return self.translate(key);
		};

		this.$el.html(tpl(options));
		this.$el.css('max-width', (options.maxWidth || 850) + 'px');
		widgetApp._widgets[widget].apply(this, [options]);
	};

	Widget.prototype.translate = function(key) {
		return widgetApp.translate(this.options.language || 'en', key)
	};

	Widget.prototype.renderView = function(view, selector, options) {
		$el = this.$el.find(selector);
		var viewObj = widgetApp.createView(view, $el, options);
		viewObj.render();

		this._viewCallbacks[view] && this._viewCallbacks[view](viewObj);
	};

	Widget.prototype.onViewRender = function(view, callback) {
		this._viewCallbacks[view] = callback;
	};
}());