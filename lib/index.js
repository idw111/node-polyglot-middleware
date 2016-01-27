import Polyglot from 'node-polyglot';

function createMiddleware(options) {
    options = options || {};
    return (req, res, next) => {
        req.polyglot = new Polyglot();
        if (typeof options === 'function') {
            var getPhrases = options;
            getPhrases((err, phrases) => {
                if (err) return next(err);
                req.polyglot.extend(phrases);
                return next();
            });
        }
        else {
            var phrases = typeof options === 'object' ? options : {};
            req.polyglot.extend(phrases);
            return next();
        }
    };
}

export default createMiddleware;
