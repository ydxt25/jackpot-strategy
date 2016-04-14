/**
 * Created by roee on 2/11/2016.
 */
(function() {
    var Validator = function() {
        this._roles = {};
    };

    Validator.prototype.validateRule  = function(roleName, language, $el) {
        return $el.validate($.extend(this._roles[roleName],{
            errorPlacement: function(error, element) {
                window.errors = window.errors || [];
                window.errors.push(error.text());

                console.log(error);
                error.html(widgetApp.translate(language, error.text()));
                error.insertAfter(element);
            }
        }));
    };

    Validator.prototype.addRule = function(name, roles) {
        this._roles[name] = roles;
    };

    widgetApp.validator = new Validator();

}());