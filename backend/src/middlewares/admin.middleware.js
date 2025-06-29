export const adminMiddlware = async (req, res, next) => {
    try {

        const isAdmin = req.user.isAdmin;
        if (!isAdmin) {
            return res.status(401).json({
                message: " Access denied ",
                success:false
            })
        }
        next();
    }
    catch (err) {
        return res.json(err);
    }
}