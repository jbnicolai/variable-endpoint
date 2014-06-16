module.exports = function (config) {
    var url = config.url,
        endpoints = config.endpoints;

    function createRewriteRules() {
        var rules = [];
        Object.keys(endpoint).forEach(function (ep) {
            // default to the andpoint named 'default'
            var baseUrl = ep !== 'default' ? '^/' + endpoint : '^';
            // rewrite <endpoint>/<url> calls to use the endpoind's url
            rules.push(baseUrl + url + api[ep] + ' [P L]');
            // rewrite <endpoint>/ calls to use /
            rules.push(baseurl + '/ / ');
        });
        return rules;
    }

    return {
        createRewriteRules: function () {
            return require('connect-modrewrite')(createRewriteRules());
        }
    };
};

