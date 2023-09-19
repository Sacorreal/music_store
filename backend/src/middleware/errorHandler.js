export function errorHandler(error, req, res, next) {
    console.log(error.name); 
    if (error.name === "error") {
        return res.status(404).json({error: `${error}`})
    }
    next()
}