export default (req, res, next) => {
    if (req.user) {
        req.isAdmin = req.user && req.user.data && req.user.data.role === 'admin';
    }
    else {
        req.isAdmin = false;
    }
    next();
};