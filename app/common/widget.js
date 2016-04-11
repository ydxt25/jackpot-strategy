(function() {
	var Widget = widgetApp.Widget = function(el, options, widget) {
		this.$el = $(el);
		this.options = options;
		this._viewCallbacks = {};
		this.$el.addClass('widget-wrapper');

		this.$el.html(JST['widgets/' + widget + '/' + widget + '.tpl.html']);
		this.$el.css('max-width', (options.maxWidth || 850) + 'px');
		widgetApp._widgets[widget].apply(this, [options]);
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