'use strict';
const ViberBot = require('viber-bot').Bot;
const TextMessage = require('viber-bot').Message.Text;
const fs = require("fs");
const _ = require("lodash");

const bot = new ViberBot({
    authToken: '4fcb41356267e5a4-cbbbe4f393eaa9f5-67717e3837aad0ac',
    name: "Viber Bot",
    avatar: "https://i.postimg.cc/VkMDmhgm/logo.jpg"
});
bot.onSubscribe(response => {
    saveProfile(response.userProfile);
    response.send(new TextMessage("Вітаю, " + response.userProfile.name));
});
bot.onUnsubscribe(userId => {
    unSaveProfile(userId);
});

function isEqual(val1, val2) {
    return val1.id === val2.id;
}

const saveProfile = (newProfile) => {
    let profiles = [];
    fs.readFile('./src/userProfiles.json', {encoding: 'utf-8'}, function (err, data) {
        if (!err) {
            if (data.length !== 0) {
                let tmp = JSON.parse(data)
                tmp.forEach((p) => {
                    profiles.push(p)
                })
            }
            profiles.push(newProfile);
            fs.writeFileSync('./src/userProfiles.json',
                JSON.stringify(Array.from(_.uniqWith(profiles, isEqual)), null, 2), 'utf-8');
        } else console.log(err);
    });
}
const unSaveProfile = (userId) => {
    let profiles = [];
    fs.readFile('./src/userProfiles.json', {encoding: 'utf-8'}, function (err, data) {
        if (!err) {
            if (data.length !== 0) {
                profiles = JSON.parse(data)
                profiles = profiles.filter((p) => p.id !== userId);
            }
            fs.writeFileSync('./src/userProfiles.json',
                JSON.stringify(Array.from(_.uniqWith(profiles, isEqual)), null, 2), 'utf-8');
        } else console.log(err);
    });
}

bot.getBotProfile().then(response => console.log(`Bot Named: ${response.name}`));

module.exports = {bot}