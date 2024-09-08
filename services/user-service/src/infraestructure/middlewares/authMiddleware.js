import jwt from 'jsonwebtoken'

function authMiddleware(req, res, next) {
    const token = req.headers['Authorization'].repleace('Bearer ', '')

    if (!token) {
        return res.status(403).json({
            message: 'No hay token provisto'
        })
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user = decoded
        next()
    } catch (error) {
        return res.status(401).json({
            message: 'Invalid token'
        })
    }
}

export default authMiddleware