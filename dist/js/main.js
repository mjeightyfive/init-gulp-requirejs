'use strict';

require.config({
    paths: {
        'jquery': 'jquery',
        'Spinjs': 'spin',
        // 'data': 'data',
        // 'spinner': 'spinner'
    },
    shim: {
        'jquery': {
            exports: '$'
        }
    }
});

require(['spinner', 'data'], function(spinner, data) {

    var spinner1 = new spinner('data1');
    spinner1.show();
    var url = 'https://picasaweb.google.com/data/feed/api/user/109473512611685902219/albumid/6088747622481515025?alt=json';

    data.get(url, function(data) {

        var url = data.feed.entry[0].media$group.media$content[0].url;
        $('#data1').html('<img class="pure-img" src="' + url + '" />');
        spinner1.hide();
    });
});