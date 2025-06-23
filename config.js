require('dotenv').config();


// Helper function to convert "true"/"false" strings to real booleans
const toBool = (value) => value === "true";

// Owner & Bot Details
global.owner = process.env.OWNER_NUMBER || "2347026851665";
global.anitav4 = process.env.BOT_NAME || "𝐐𝐔𝐄𝐄𝐍_𝐀𝐍𝐈𝐓𝐀-𝐕𝟒";
global.ownername = process.env.OWNER_NAME || "David Cyril";
global.packname = process.env.PACK_NAME || "𝐐𝐔𝐄𝐄𝐍_𝐀𝐍𝐈𝐓𝐀-𝐕𝟒";
global.author = process.env.AUTHOR || "𝐃𝐀𝐕𝐈𝐃 𝐂𝐘𝐑𝐈𝐋";
global.channelname = process.env.CHANNEL_NAME || "𝐃𝐀𝐕𝐈𝐃 𝐂𝐘𝐑𝐈𝐋";
global.channeljid = process.env.CHANNEL_JID || "120363315231436175@newsletter";

// Auto-Features
global.autoTyping = toBool(process.env.AUTO_TYPING);
global.autoRecord = toBool(process.env.AUTO_RECORD);
global.autoViewStatus = toBool(process.env.AUTO_VIEW_STATUS);
global.AUTO_STATUS_REACT = toBool(process.env.AUTO_STATUS_REACT);
global.autoLikeEmoji = process.env.AUTO_LIKE_EMOJI || "💚";
global.LEVELUP = toBool(process.env.LEVELUP);
global.ANTIVIEWONCE = toBool(process.env.ANTIVIEWONCE);

global.public = process.env.PUBLIC === 'true';
// Group & Security Settings

global.ANTIDELETE = toBool(process.env.ANTIDELETE);
global.unavailable = toBool(process.env.UNAVAILABLE);
global.available = toBool(process.env.AVAILABLE);
global.autoreadmessages = toBool(process.env.AUTO_READ_MESSAGES);
global.chatbot = toBool(process.env.CHATBOT);
global.autoreact = toBool(process.env.AUTO_REACT);
global.WELCOME = toBool(process.env.WELCOME);

// Prefix & Other Settings
global.prefix = process.env.PREFIX || '.';
global.autobio = toBool(process.env.AUTO_BIO);
global.ANTI_TEMU = toBool(process.env.ANTI_TEMU);
global.ANTI_TAG = toBool(process.env.ANTI_TAG);
global.ANTICALL = toBool(process.env.ANTICALL);
global.antilink = toBool(process.env.ANTILINK);
global.antilinkkick = toBool(process.env.ANTILINK_KICK);
global.antilinkwarn = toBool(process.env.ANTILINK_WARN);
global.SESSION_ID = toBool(process.env.SESSION_ID) || '
{"noiseKey":{"private":{"type":"Buffer","data":"ED5khs2xEgCGbCD+tDtuIntvQqRq+AofEj0t8P3Om2k="},"public":{"type":"Buffer","data":"TZmpxDfe18HoLLZsvJqUE34Id8D/QcIVX6jPQr6Gczs="}},"pairingEphemeralKeyPair":{"private":{"type":"Buffer","data":"OHvgGM1HnKew8GizH7BGRl2t0SnbXA1GHgNZ8hCQe3g="},"public":{"type":"Buffer","data":"dMXki3gq+8kjpT8sSuvtsUsUecYVFoQr3l3ue67LZBw="}},"signedIdentityKey":{"private":{"type":"Buffer","data":"aF7Xn0YgHIgn+leU2kzFJYHi1jeF/LXlEmr+fPeHH1s="},"public":{"type":"Buffer","data":"nQFtPm1Do4Cl9ne0DheazZt+nsuhHJ7amAq1HG9hU1A="}},"signedPreKey":{"keyPair":{"private":{"type":"Buffer","data":"cEfpdnT9DaMKeW68X0eNVQmr1n6OkMREQ9Nup8qGk08="},"public":{"type":"Buffer","data":"zUTxoDkFD2oAaYB8XdQGEij4bZDBxcZh/jS3A9j2QjM="}},"signature":{"type":"Buffer","data":"8x0eEmQ3SaWSPyQt94ZaO8cQhV47RsvOJDhSdS1udXJK4UMfG9l9f+/ODOGSp1FB3l4YLapTUOiCZ6Ltt3qajg=="},"keyId":1},"registrationId":36,"advSecretKey":"ooCzg+BB9JoMFucHZxl5ho514tDNGfqjQHFgTLkcdkg=","processedHistoryMessages":[],"nextPreKeyId":31,"firstUnuploadedPreKeyId":31,"accountSyncCounter":0,"accountSettings":{"unarchiveChats":false},"registered":true,"pairingCode":"CYRILDEV","me":{"id":"2347026851665:5@s.whatsapp.net","name":"Mikezmedia","lid":"270523330252947:5@lid"},"account":{"details":"CImyw+UCELbJ5cIGGAEgACgA","accountSignatureKey":"ve0GUtdrHkmD/TBqPFDtCNZ5lgLxbypi0Xx3BOu+yhY=","accountSignature":"lqO7NKS65Gmq1NvsHpTcLoPxSdBqiDgLaR/8XSMNAuNcrekp6ZiBZzP8E/hcOWPA/ishFN3eMD8DeAsMqrdHAA==","deviceSignature":"13X1BcVZan12CAV4hI9z3XxrvYlS7fOTxgo//d2Ow5ETsnYE9X5b4Z8lHc4vcSeKI5jhGvCm28rUR7lCa8JfjA=="},"signalIdentities":[{"identifier":{"name":"2347026851665:5@s.whatsapp.net","deviceId":0},"identifierKey":{"type":"Buffer","data":"Bb3tBlLXax5Jg/0wajxQ7QjWeZYC8W8qYtF8dwTrvsoW"}}],"platform":"smba","routingInfo":{"type":"Buffer","data":"CA0IAg=="},"lastAccountSyncTimestamp":1750688959,"lastPropHash":"3gPUJk"}
    ',
// Messages
global.mess = {
    success: process.env.MESSAGE_SUCCESS || '𝙳𝚘𝚗𝚎',
    admin: process.env.MESSAGE_ADMIN || '_*❗This Command Can Only Be Used By Group Admins !*_',
    botAdmin: process.env.MESSAGE_BOT_ADMIN || '_*❗This Command Can Only Be Used When Bot Becomes Group Admin !*_',
    OnlyOwner: process.env.MESSAGE_OWNER || '_*❗This Command Can Only Be Used By My Owner !*_',
    OnlyGrup: process.env.MESSAGE_GROUP || '_*❗This Command Can Only Be Used In Group Chat !*_',
    private: process.env.MESSAGE_PRIVATE || '_*❗This Command Can Only Be Used In Private Chat !*_',
    wait: process.env.MESSAGE_WAIT || '_*Please Wait*_',
    notregist: process.env.MESSAGE_NOT_REGIST || '_*You are not registered in the Bot Database. Please register first*_',
    premium: process.env.MESSAGE_PREMIUM || '_*Premium only" Want Premium? Chat Owner*_',
    endLimit: process.env.MESSAGE_END_LIMIT || '_*Your Daily Limit Has Been Used Up, The Limit Will Be Reset Every 00:00 AM_*.',
};


let fs = require('fs')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})
