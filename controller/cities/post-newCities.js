const { postCreateCities }= require ('../../models/cities')

module.exports = (db) => async (req,res,next) => {
    const body = req.body
    
    console.log(body)
    const dbRes = await postCreateCities(await db , body)()


    if(!dbRes.ok) return next({
        statusCode: 500,
        error: new Error('something went wrong!'),
    })

    res.status(200).json({
        success: true,
        data: dbRes.response,
    })

}