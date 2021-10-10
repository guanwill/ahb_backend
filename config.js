require('dotenv').config()

module.exports = {
    "mongodb_url": process.env.MONGODB_URI,
    "passport_secret": process.env.PASSPORT_SECRET,
    "giantbomb_api_key": process.env.GB_API_KEY,
    "access_token_expires_in": process.env.ACCESS_TOKEN_EXPIRES_IN,
    "ahb_url": process.env.AHB_URL
}