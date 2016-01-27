import Polyglot from 'node-polyglot';

function createMiddleware(options) {
    return (req, res, next) => {
        req.polyglot = new Polyglot();
        if (options.phrases && typeof options.phrases === 'object') {
            req.polyglot.extend(options.phrases);
            return next();
        }
        else if (options.getPhrases && typeof options.getPhrases === 'function') {
            options.getPhrases((err, phrases) => {
                if (err) return next(err);
                req.polyglot.extend(phrases);
                return next();
            });
        }
        else {
            return next();
        }
    };
}

export default createMiddleware;
