import jwt from "jsonwebtoken";
const SECRET = process.env.JWT_SECRET;


const generateToken = (user) => {
    return jwt.sign({uid: user.id, role: user.role}, SECRET, {expiresIn: "24h"}); 
}

const verifyToken = (req, res, next) =>{
    const token = req.headers["x-access-token"]; 
    if (!token){
        res.status(401).json({auth: false, error: "empty token"})
    }
    try {
    const {uid, role} = jwt.verify(token, SECRET);    
    req.userId = uid; 
    req.roleUser = role
    
    next(); 

    } catch (error) {
        next(error)
    }
    
}

export { generateToken, verifyToken };

