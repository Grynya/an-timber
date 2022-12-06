const express = require('express');
const app = express();
const cors = require('cors');
const {bot} = require('./sender.js')
app.use(cors({
    origin: true,
    credentials: true
}))
require("./routes").routes(app);
const port = process.env.PORT || 5000;

const WEB_URL = 'https://an-timber-backend.onrender.com';

app.use("/viber/webhook", bot.middleware());


app.listen(port, () => {
    console.log(`Application running on port: ${port}`);
    bot.setWebhook(`${WEB_URL}/viber/webhook`).catch(error => {
        console.log('Can not set webhook on following server. Is it running?');
        console.error(error);
        process.exit(1);
    });
});