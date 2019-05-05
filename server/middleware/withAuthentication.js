const withAuthentication = (req, res, next) => {    // Authentication Middleware
    // TODO: Is the user authenticated? What's their role?
    next();
};

export default withAuthentication;