const bodyParser = require('body-parser');
const TextMessage = require("viber-bot/lib/message/text-message");
const jsonParser = bodyParser.json();
const {bot} = require('./sender.js')
const fs = require("fs");
const {formatText} = require("./utils")
module.exports.routes = (app) => {

    app.post('/send-email', jsonParser, (req, res)=> {
            fs.readFile('./src/userProfiles.json', {encoding: 'utf-8'}, function (err, data) {
                if (!err) {
                    let tmp = JSON.parse(data)
                    tmp.forEach((profile) =>
                        bot.sendMessage(profile, new TextMessage((formatText(req.body))))
                    )
                    res.sendStatus(200);
                } else console.log(err);
            });
    })
}