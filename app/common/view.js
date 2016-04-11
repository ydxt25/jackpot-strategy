(function() {
	var View = widgetApp.View = function(viewCallbacks, el, options) {
		var self = this;
		this.$el = $(el);
		this.options = options;
		this.template = 'views/' + options.viewName + '/templates/' + ( viewCallbacks.template || options.template || 'default' ) + '.html';
		this.viewCallbacks = viewCallbacks;
		this.events = new widgetApp.Events();
	};

	View.prototype.render = function() {
		var viewOptions = this.viewCallbacks.templateHelpers ? this.viewCallbacks.templateHelpers() : {};

		this.$el.html(
			_.template(JST[this.template]())(viewOptions)
		);

		this.viewCallbacks.onShow && this.viewCallbacks.onShow.apply(this, [this.options]);
		this._addEvents();
	};

	View.prototype._addEvents = function() {
		var self = this,
			viewCallbacks = this.viewCallbacks;

		$.each((viewCallbacks.events || {}), function(eventData, callback) {
			if (viewCallbacks[callback]) {
				eventData = eventData.split(' ');

				self.$el.find(eventData[1]).on(eventData[0], function(e) {
					viewCallbacks[callback].apply(self, [ e ]);
				});
			}
		});
	};

	View.prototype.triggerMethod = function(method) {
		var args = Array.prototype.slice.apply(arguments, [ 1 ]);
		this.viewCallbacks[method].apply(this, args);
	};

	View.prototype.destroy = function() {
		this.$el.html('');
	};
}());