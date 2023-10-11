import { User } from "../models/user.models.js";
import { generateToken } from "../utils/token.js";

const signIn = async (req, res, next) =>{
  const {email, password } = req.body; 
  try {
    const foundUser = await User.findOne({email}); 
    if(!foundUser){
      return res.status(404).json({error: "User not exist"})
    }
    const validPassword = await foundUser.validatePassword(password);  
    if(!validPassword){
      return res.status(404).json({
        ok: false,
        error:"Credentials incorrect"
      })
    }
    res.status(200).json({ok:true, message: "Welcome"})

    
  } catch (error) {
    console.log(error)
    next(error)

    
  }



}

const signUp = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
    
        const foundUser = await User.findOne({ email });
        if (foundUser) {
          return res
            .status(401)
            .json({error: 'email already exist'})
        }

        const UserProps = {
            name, 
            email,
            password
        }

        const newUser = new User(UserProps)

        newUser.password = await newUser.encryptPassword(password)
        await User.create(newUser)
        const payload = {id:newUser._id, role:newUser.role}; 
        const token = generateToken(payload)
        
        res.status(201).json({
          message:"User created",
          token
        
        })
    

      } catch (error) {
        console.log(error)
        next(error);
      }

}

export { signIn, signUp };

