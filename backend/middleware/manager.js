
function manager(req, res, next) {
    // if(req.user.role !== 'manager' || req.user.role !=='stakeholder') return res.status(403).send('Access denied.');
    next();
}
module.exports = manager;