const jwt = require('jsonwebtoken')
require('dotenv').config()

const secretKey = process.env.SECRET_KEY;

exports.generateToken = (user) => {
    return jwt.sign({ _id: user._id, displayName: user.displayName }, secretKey, { expiresIn: '7d' })
}
exports.verifyToken = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decodedToken = jwt.verify(token, secretKey);
        req.userId = decodedToken._id;
        next();
    } catch (error) {
        return res.status(401).json({
            message: 'Invalid or expired token',
        });
    }
};



// för att logga in som admin  email: mia@.com - password: mia
// const admin = ['6434120960bc68540d2d3187']
// test admin email: admin@mail.com pass: bytmig123
// const admin = ['646627979885aef7baa7ea69']