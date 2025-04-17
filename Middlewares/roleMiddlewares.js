export const adminMiddleware = (req, res, next) => {
    if (req.user.role !== 'Admin') {
        return res.status(403).send({ message: "only admin can access this resource" });
    }
    next();
}