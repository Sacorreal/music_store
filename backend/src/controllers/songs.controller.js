const getSongs = async (req, res, next) => {
    try {
        res.status(200).json({
            "canciones": "listado de canciones"
        })
    } catch (error) {
        next(error)
    }
}

export { getSongs }