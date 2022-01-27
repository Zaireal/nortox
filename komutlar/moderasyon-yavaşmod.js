const Discord = require('discord.js');
const request = require('request')
const fynx =require("../ayarlar/bot.json");
const db = require("quick.db");
exports.run = async(client, message, args) => {
  if (!message.member.hasPermission("MANAGE_CHANNELS")) 
{
              var embed = new Discord.MessageEmbed()
                .setDescription(`<:pasif:755838175540412457> Bu komutu kullanabilmek için \`Kanalları Yönet\` yetkisine sahip olmalısın.`)
                .setColor("BLACK")
            message.channel.send({embed})
            return
          }

  let prefix = await db.fetch(`prefix.${message.guild.id}`) || fynx.prefix 
if (message.channel.type !== "text") return;
const limit = args[0] ? args[0] : 0;
  if(!limit) {
              var embed = new Discord.MessageEmbed()
                .setDescription(`<a:hypesquad1:756152750282375234>  **Lütfen Bir Sayı Belirt!** \n**__Örnek Kullanım__** : \`${prefix}yavaşmod <Sayı>\``)
                .setColor("BLACK")
            message.channel.send({embed})
            return
          }
if (limit > 120) {
    return message.channel.send(new Discord.MessageEmbed().setDescription("<:pasif:755838175540412457> **Süre limiti maksimum** **120** **saniye olabilir.**").setColor("BLACK"));
}
   message.channel.send(new Discord.MessageEmbed().setDescription(`<:aktif:755838164626833459> **Yazma süre limiti** **${limit}** **saniye olarak ayarlanmıştır**`).setColor("BLACK"));
var request = require('request');
request({
    url: `https://discordapp.com/api/v7/channels/${message.channel.id}`,
    method: "PATCH",
    json: {
        rate_limit_per_user: limit
    },
    headers: {
        "Authorization": `Bot ${client.token}`
    },
})};
exports.config = {
name: "yavaşmod",
aliases: ["slowmode", "yavaşmod"]
}