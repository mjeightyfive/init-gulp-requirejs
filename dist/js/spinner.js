(function() {

    'use strict';

    define(['Spinjs'], function(Spinner) {

        var spinner = (function() {

            function Loader(target) {
                this.target = target;
                this.spinner = new Spinner();
            }

            Loader.prototype.show = function() {
                this.spinner.spin(document.getElementById(this.target));
            };

            Loader.prototype.hide = function() {
                this.spinner.stop();
            };

            return Loader;
        }());

        return spinner;
    });

}());