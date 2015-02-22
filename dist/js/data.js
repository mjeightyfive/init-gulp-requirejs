(function() {

    'use strict';

    define(['jquery'], function($) {

        var data = (function() {

            function get(url, callback) {

                $.ajax({
                    url: url,
                    success: function(data) {
                        callback(data);
                    },
                    error: function() {
                        console.log('#fail');
                    }
                });
            }

            return {
                get: get
            };

        }());

        return data;
    });
}());