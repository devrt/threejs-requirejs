'use strict';

var fs = require('fs');
var path = require('path');
var request = require('sync-request');
var beautify = require('js-beautify').js_beautify;
var uglify = require("uglify-js");

var revision = 'r83';

var cdnurl = 'https://cdn.rawgit.com/mrdoob/three.js/' + revision + '/';

var modules = [
    'examples/js/loaders',
    'examples/js/controls',
    'examples/js/renderers',
    'examples/js/shaders'
];

var config = {};
config.paths = {};
config.shim = {};

modules.forEach(function(m) {
    var res = request('GET', 'https://api.github.com/repos/mrdoob/three.js/contents/' + m + '?ref=' + revision, {
        'headers': {
            'user-agent': 'UA'
        }
    });
    var data = JSON.parse(res.body.toString('utf-8'));
    data.forEach(function(d) {
        if (path.extname(d.name) == '.js') {
            var name = d.name.replace(/\.js$/, '');
            var fpath = d.path.replace(/\.js$/, '');
            config.paths[name] = cdnurl + fpath;
            config.shim[name] =  { deps: ['THREE_global'] };
        }
    });
});

var out = fs.readFileSync('threejs-requirejs.tmpl.js', 'utf-8');
out = out.replace('{cdnurl}', cdnurl);
out = out.replace('{config}', JSON.stringify(config));
var formatted = beautify(out);
var minified = uglify.minify(out, {fromString: true}).code;
fs.writeFileSync('build/threejs-requirejs.js', formatted, 'utf-8');
fs.writeFileSync('build/threejs-requirejs.min.js', minified, 'utf-8');
