const logger = (req, res, next) => {    // Logger Middleware
    console.log(
        '=> ',
        req.method,
        req.originalUrl
    );
    next();
};

export default logger;