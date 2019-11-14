const jwt = require('jsonwebtoken');

/**
 * Generates JWT token
 * @param {string}
 * @returns {string}
 */
exports.genToken = user => {
    return jwt.sign({userId: user.id, username: user.username}, process.env.JWT_SECRET_KEY, { expiresIn: '1h' });
};

/**
 * Verifies the token
 * @param {object}
 * @param {object}
 * @param {function}
 * @returns {object}
 */
exports.verToken = (req, res, next) => {
    //Note: First character is lower case for some error reasons, authorization.
    let token = req.headers.authorization || '';
    if (token) {
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err,user) => {
        if(err) return res.status(401).json({message:'invalid token'});
        req.userId = user.userId;
        req.username = user.username;
        next();
    });
    }
    else res.status(401).json({message:'unauthorized access'});
};