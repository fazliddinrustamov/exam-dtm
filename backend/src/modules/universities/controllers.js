const model  = require('./model.js')

const GETALL = async (req,res) => {
    try {
        let universities = await model.READ(req.query)
        if(universities) {
            res.status(200).json({
                status:200,
                message: 'ok',
                data: universities
            })
        } 
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    GETALL
}