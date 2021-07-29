const env = require('../config/env');
const constants = require('../config/constants');
const axios = require('axios');
const fs = require('fs');

// Posts a Private Note on Online Notes
exports.onlineNotes_post = async function (description, title) {
    if (!env.ONLINE_NOTES_USERNAME || !env.ONLINE_NOTES_PASSWORD) {
        return {};
    }
    const url = `${constants.online_notes_host}/api/url-params/insert-private-note.php?username=${env.ONLINE_NOTES_USERNAME}&password=${env.ONLINE_NOTES_PASSWORD}&note-description=${description}&note-title=${title}`;
    const response = await axios.get(url);
    return response.data;
}

// Writes txt file
exports.writeUrl = function (url) {
    const date = new Date;
    const date_format = `${date.getFullYear()}-${date.getMonth()}-${date.getDay()} - ${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}`

    const path = __dirname + `../../../${date_format}.txt`;
    fs.writeFileSync(path, url);
}