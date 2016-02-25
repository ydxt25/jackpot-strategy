/**
 * Created by roee on 2/11/2016.
 */
(function() {
    var Validator = function() {
        this._roles = {};
    };

    Validator.prototype.validateRule  = function(roleName, $el) {
        return $el.validate(this._roles[roleName]);
    };

    Validator.prototype.addRule = function(name, roles) {
        this._roles[name] = roles;
    };

    widgetApp.validator = new Validator();

}());