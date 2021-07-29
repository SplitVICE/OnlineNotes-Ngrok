require('dotenv').config();
module.exports = {
    ONLINE_NOTES_USERNAME: process.env.ONLINE_NOTES_USERNAME || undefined,
    ONLINE_NOTES_PASSWORD: process.env.ONLINE_NOTES_PASSWORD || undefined,
    NGROK_PORT: process.env.NGROK_PORT || 80
}