import { User } from "../models/user.models.js";

const getComposers = async (req, res, next) => {
    try {
        const composers = await User.find({role:"composer"}, {password: 0}).populate("tracks"); 
        res.status(200).json(composers)
        
    } catch (error) {
        next(error);
    }
};



const updateUser = async (request, response, next) => {
    try {
    const id = request.params.id;
    const userNewProps = request.body; 
     await User.findByIdAndUpdate(id, userNewProps, {new: true,}).exec();
     response.status(201).json({message:"user updated"})
    
    } catch (error) {
        console.log(error)
        next(error)
    } 
}

const deleteUser = async (request, response, next) => {
   try {
    const id = request.params.id; 
    const deletedUser = await User.findByIdAndRemove(id).exec();
    if(!deletedUser){
        response.status(404).end(); 
    }
    response.status(200).send("User successfully deleted")
   } catch (error) {
    next(error)
   }
}

const getComposer = async (req, res, next) => {
    const id = req.params.id; 
    const composer = await User.findById(id, {password: 0}).populate('tracks').exec();    
    res.status(200).json(composer)
}

export { deleteUser, getComposer, getComposers, updateUser };

