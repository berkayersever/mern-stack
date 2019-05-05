const logger = (req, res, next) => {    // Logger Middleware
    console.log(
        '=> ',
        req.method,
        req.originalUrl,
        'is Authenticated: ',
        req.isAuthenticated,
        'is Admin: ',
        req.isAdmin
    );
    next();
};

export default logger;