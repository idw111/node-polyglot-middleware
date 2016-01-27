# node-polyglot-middleware [![NPM version][npm-image]][npm-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
> express middleware for node-polyglot (polyglot.js from airbnb)

## Installation

```sh
$ npm install --save node-polyglot-middleware
```

## Usage
- node-polyglot prioritize options.phrases over options.getPhrases
- do not provide static phrases if you want to fetch phrases dynamically
```js
var options = {
    phrases: { // using static phrases
        hello: 'Hello'
    },
    getPhrases(done) { // fetching phrases dynamically
        request.get('http://example.com/api/to/retrieve/phrases').then((phrases) => {
            return done(null, phrases);
        }).catch((err) => {
            return done(err);
        });
    }
};
var polyglot = require('node-polyglot-middleware')(options);
var express = require('express');
var app = express();

app.use(polyglot);

// after polyglot middleware is specified,
// you can use req.polyglot in the following middlewares and routers
app.use(function(req, res, next) {
    var hello = req.polyglot.t('hello');
});
```

## License

MIT © [Dongwon Lim](idw111@gmail.com)


[npm-image]: https://badge.fury.io/js/node-polyglot-middleware.svg
[npm-url]: https://npmjs.org/package/node-polyglot-middleware
[travis-image]: https://travis-ci.org/idw111/node-polyglot-middleware.svg?branch=master
[travis-url]: https://travis-ci.org/idw111/node-polyglot-middleware
[daviddm-image]: https://david-dm.org/idw111/node-polyglot-middleware.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/idw111/node-polyglot-middleware
[coveralls-image]: https://coveralls.io/repos/idw111/node-polyglot-middleware/badge.svg
[coveralls-url]: https://coveralls.io/r/idw111/node-polyglot-middleware
