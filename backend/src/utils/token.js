import jwt from "jsonwebtoken";
const SECRET = process.env.JWT_SECRET;


const generateToken = (payload) => {
    return jwt.sign(payload, SECRET, {expiresIn: "24h"}); 
}

export { generateToken };

