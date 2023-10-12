import Joi from 'joi';

const createSongValidator = (request, response, next) => {
    const {name } = request.body;
    const schema = Joi.object({
        name: Joi.string().min(2).max(100)
    })

    const value = schema.validate({
        name: name

    }); 
    if(value.error){
        response.status(500).json(value.error)
    }else{
        next()
    }
}

const updateUserValidator = (request, response, next) => {
    try {
        const {role} = request.body; 
        if(role == "composer" || role == "singer"){             
            next()          

        } else{
            return response.status(500).json({error:"role not exist"})
        }
    } catch (error) {
        
    }
}

export { createSongValidator, updateUserValidator };

