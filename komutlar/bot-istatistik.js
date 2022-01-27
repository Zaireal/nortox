const Discord = require('discord.js');
const moment = require('moment');
const ayarlar = require('../ayarlar/bot.json');
require('moment-duration-format');
exports.run = async(client, message, args) => {

let lordcreative = new Discord.MessageEmbed()
.setThumbnail(`https://cdn.discordapp.com/attachments/756068330992959590/756416214342828042/wObXq2.jpg`)
.addField("__**Bot Verileri**__", `<a:hypesquad1:756152750282375234> **Toplam Sunucu** **|**  **${client.guilds.cache.size}** \n <a:hypesquad1:756152750282375234> **Toplam Kullanıcı** **|** **${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()}** \n <a:hypesquad1:756152750282375234> **Toplam Kanal** **|** **${client.channels.cache.size}**`)
.addField("__**Bot Geliştiricisi**__", `<a:hypesquad1:756152750282375234> **Bot Geliştiricisi**  <@669941035404886027> \n **AffedilmemTR#7935** \n`)
.addField("__**Sürümler**__", `<a:hypesquad1:756152750282375234> **Discord.js Sürümü** **|**  **v${Discord.version}** \n<a:hypesquad1:756152750282375234> **Node.js Sürümü** **|**  **${process.version}**`)
.addField("__**Gecikme**__", `<a:hypesquad1:756152750282375234> **${client.ws.ping}** ms`,true)
    .setImage(`https://i.hizliresim.com/wObXq2.jpg`)
.setColor("BLACK")
message.channel.send(lordcreative)
}

exports.config = {
name: "botbilgi",
aliases: []
}

//.addField("**__Müzik Oynatılan__** ", "<a:hypesquad1:756152750282375234> " +client.voice.connections.size + " Sunucu", true)