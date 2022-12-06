const express = require('express');
const app = express();
const cors = require('cors');
const {bot} = require('./sender.js')
app.use(cors({
    origin: true,
    credentials: true
}))
require("./routes").routes(app);
console.log(process.env.RENDER_EXTERNAL_URL)
const port = process.env.PORT || 80;

const WEB_URL = process.env.RENDER_EXTERNAL_URL;

app.use("/viber/webhook", bot.middleware());


app.listen(port, () => {
    console.log(`Application running on port: ${port}`);
    bot.setWebhook(`${WEB_URL}/viber/webhook`).catch(error => {
        console.log('Can not set webhook on following server. Is it running?');
        console.error(error);
        process.exit(1);
    });
});