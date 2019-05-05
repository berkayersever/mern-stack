const logger = (req, res, next) => {    // Logger Middleware
    console.log(
        '=> ',
        req.method,
        req.originalUrl,
        'isAuthenticated: ',
        req.isAuthenticated,
        'isAdmin: ',
        req.isAdmin
    );
    next();
};

export default logger;