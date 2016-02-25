(function(){

    /**
     * Simple event component
     *
     * @type {Events}
     */
    var Events = widgetApp.Events = function() {
        this._events = {
            on: {},
            one: {},
            ready: {}
        };
    };

    /**
     * Create new event callback
     *
     * @param event
     * @param callback
     */
    Events.prototype.on = function(event, callback) {
        this._events.on[event] = this._events.on[event] || [];
        this._events.on[event].push(callback);
    };

    Events.prototype.ready = function(event, callback) {
        if (this._events.ready[event]) {
            callback();
        }
        else {
            this.one(event, callback)
        }
    };

    /**
     * Create new event callback to be executed one time
     *
     * @param event
     * @param callback
     */
    Events.prototype.one = function(event, callback) {
        this._events.one[event] = this._events.on[event] || [];
        this._events.one[event].push(callback);
    };

    /**
     * Turn off event handler
     *
     * @param event
     */
    Events.prototype.off = function(event) {
        this._offOn(event);
        this._offOne(event);
    };

    /**
     * turn off "On" events
     *
     * @param event
     * @private
     */
    Events.prototype._offOn = function(event) {
        this._events.on[event] = null;
        delete this._events.on[event];
    };

    /**
     * turn off "One" events
     *
     * @param event
     * @private
     */
    Events.prototype._offOne = function(event) {
        this._events.one[event] = null;
        delete this._events.one[event];
    };

    /**
     * Trigger event callbacks by event name
     * and given parameters
     *
     * @param event
     * @param arg1
     * @param arg2
     * @param arg3
     * @param arg4
     * @param arg5
     */
    Events.prototype.trigger = function(event, arg1, arg2, arg3, arg4, arg5) {
        this._events.ready[event] = 1;

        if (this._events.on[event]) {
            for(var key in this._events.on[event]) {
                if ( ! isNaN(key)) {
                    if (this._events.on[event][key] && jQuery.isFunction(this._events.on[event][key]))
                        this._events.on[event][key](arg1, arg2, arg3, arg4, arg5);
                }
            }
        }

        if (this._events.one[event]) {
            for(var key in this._events.one[event]) {
                if (jQuery.isFunction(this._events.one[event][key]))
                    this._events.one[event][key]();
            }

            this._offOne(event);
        }
    }

}());