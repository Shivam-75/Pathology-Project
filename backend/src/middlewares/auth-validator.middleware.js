export const validatorChecker = (Schema) => async (req, res, next) => {
    try {
        const parsedBody = await Schema.parseAsync(req.body);
        req.body = parsedBody; 
        next();
    } catch (err) {
        return res.status(500).json({
            message: err.issues[0].message
        });
    }
};
  