const withAuthentication = (req, res, next) => {    // Authentication Middleware
    // TODO: Is the user authenticated? What's their role?
    // Dummy for now:
    req.isAdmin = true;
    req.isAuthenticated = true;
    next();
};

export default withAuthentication;