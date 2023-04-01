module.exports.checkAdminRole = (req, res, next) => {
    try {
        const { role } = req.user;
        if(role === 'admin') {
            next();
        }else{
            return res.status(403).json({message: "For Admin User Only"});
        }
        
    } catch (error) {
        next(error);
    }
}