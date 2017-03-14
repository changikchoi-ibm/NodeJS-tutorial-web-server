var middleware = {
    requireAuthentication : function (req, res, next){
        console.log('Private route hit!');
        next();
    },
    logger: function (req, res, next) {
        console.log("Request " + new Date().toISOString() + ' ' + req.method + ' ' + req.originalUrl);
        next();
    }
};

module.exports = middleware;