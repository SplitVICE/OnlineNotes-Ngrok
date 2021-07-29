const t = require('./libs/tasks');
const ngrok = require('ngrok');
const env = require('./config/env');

(async () => {
    try {
        const ngrok_options = { addr: env.NGROK_PORT, };

        const url = await ngrok.connect(ngrok_options); // Initiates Ngrok connection
        const online_notes = await t.onlineNotes_post(url, 'OnlineNotes-Ngrok');

        t.writeUrl(url); // Writes the generated txt file

        online_notes.url = url;
        console.log(online_notes);

    } catch (error) { console.log(error); }
})();