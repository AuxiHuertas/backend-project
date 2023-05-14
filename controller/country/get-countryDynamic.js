const { getCountryDynamic }= require ('../../models/country')

module.exports = (db) => async (req,res,next) => {
    const params = req.params.country
    const dbRes = await getCountryDynamic(await db, params)()

    if(!dbRes.ok) return next({
        statusCode: 500,
        error: new Error('something went wrong!'),
    })

    res.status(200).json({
        success: true,
        data: dbRes.response,
    })
}