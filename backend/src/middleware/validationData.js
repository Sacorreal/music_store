import Joi from 'joi'; 

const createSongValidator = (request, response, next) => {
    const {name } = request.body
    const schema = Joi.object({
        name: Joi.string().min(2).max(10)
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

const updateSongValidator = "funcion para validar creacion usuario"; 

export { createSongValidator  }