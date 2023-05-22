
function stakeholder(req, res, next) {
    // if (req.user.role !== 'stakeholder' || req.user.role !== 'reviewer') return res.status(403).send('Access denied.');
    next();
}
module.exports = stakeholder;