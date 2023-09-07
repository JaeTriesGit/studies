const logger = require('./logger')

const reqLog = (req,res,next) => {
    logger.info('Method: ',req.method)
    logger.info('Path: ', req.path)
    logger.info('Body: ', req.body)
    logger.info('---')
    next()
}

const UnknownEndpoint = (req,res) => {
    res.status(404).send({error:'Endpoint not found'})
}

const ErrorHandler = (error, req, res, next) => {
    logger.error(error.message)

    if (error.name==='CastError'){
        return res.status(400).json({error:'Malformed ID'})
    } else if (error.name==='ValidationError'){
        return res.status(400).json({error:error.msg})
    }
    next(error)
}

module.exports = {
    reqLog,
    UnknownEndpoint,
    ErrorHandler
}