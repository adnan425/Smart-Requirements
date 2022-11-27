const Jwt = require('jsonwebtoken');

function auth(req, res, next){
    var token = req.header('x-auth-token');
    if(!token) return res.status(401).send("Access denied. No token provided.");

    try{
        const decode = Jwt.verify(token,'myKey');
        req.user = decode;
        next();
    }catch(ex){
        res.status(400).send('Invalid token');
    }
}
module.exports = auth;